import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";
import nodemailer from "nodemailer";
import { body, validationResult } from "express-validator";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });

const router = express.Router();


// const createTransporter = () => {
//   return nodemailer.createTransport({
//     service: process.env.EMAIL_SERVICE || "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });
// };
// console.log("EMAIL_USER =", process.env.EMAIL_USER);
// console.log("EMAIL_PASSWORD =", process.env.EMAIL_PASSWORD ? "LOADED" : "MISSING");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});
const createTransporter = () => transporter;


const validateFormSubmission = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 2, max: 100 })
    .withMessage("Name must be between 2 and 100 characters"),
  body("email")
    .trim()
    .isEmail()
    .withMessage("Invalid email format")
    .normalizeEmail(),
  body("phno")
    .trim()
    .isMobilePhone()
    .withMessage("Invalid phone number format"),
  body("message")
    .trim()
    .notEmpty()
    .withMessage("Message is required")
    .isLength({ min: 0, max: 5000 })
    .withMessage("Message must be between 0 and 5000 characters"),
];

/**
 * Format email body with submitted data
 * @param {Object} data - Form submission data
 * @returns {string} Formatted email body
 */
const formatEmailBody = ({ name, phno, email, message }) => {
  return `
This person showed interest in connecting with you via the contact form.
Name: ${name}
Phone: ${phno}
Email: ${email}
Message: ${message}
  `.trim();
};

/**
 * POST /api/form - Handle contact form submission
 * @route POST /api/form
 * @param {string} name - Sender's name
 * @param {string} email - Sender's email
 * @param {string} phno - Sender's phone number
 * @param {string} message - Contact message
 * @returns {Object} Success status and confirmation
 */
router.post("/form", validateFormSubmission, async (req, res) => {
  // Check validation errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors: errors.array().map((err) => ({
        field: err.param,
        message: err.msg,
      })),
    });
  }

  const { name, phno, email, message } = req.body;

  try {
    const transporter = createTransporter();

    
    await transporter.verify();

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `New Form Submission from ${name}`,
      text: formatEmailBody({ name, phno, email, message }),
      replyTo: email,
    };

    await transporter.sendMail(mailOptions);

    return res.status(200).json({
      success: true,
      message: "Form submitted successfully. We will get back to you soon!",
      data: {
        name,
        email,
        submittedAt: new Date().toISOString(),
      },
    });
  } catch (error) {
    console.error("Email sending error:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to submit form. Please try again later.",
      error:
        process.env.NODE_ENV === "development"
          ? error.message
          : undefined,
    });
  }
});

export default router;
