import express from "express";
import nodemailer from "nodemailer";
import { body, validationResult } from "express-validator";

const router = express.Router();

// ✅ Create transporter ONCE (uses env from app.js)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

transporter.verify((err) => {
  if (err) console.error("MAIL SERVER ERROR:", err);
  else console.log("Mail server ready");
});

// ✅ POST /api/form
router.post(
  "/form",
  [
    body("name").trim().notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("message").trim().notEmpty().withMessage("Message is required"),
  ],
  async (req, res, next) => {
    try {
      // ✅ Validation check
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, message } = req.body;

      // ✅ Debug (remove later if you want)
      console.log("MAIL_USER:", process.env.MAIL_USER ? "Loaded" : "Missing");

      // ✅ Email content
      const mailOptions = {
        from: process.env.MAIL_USER,
        to: process.env.MAIL_USER,
        subject: "New Contact Form Submission",
        html: `
          <h3>New Message from Website</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      };

      // ✅ Send email
      try {
      await transporter.sendMail(mailOptions);
    } catch (e) {
      console.error("Mail failed:", e);
    }

      res.status(200).json({
        success: true,
        message: "Form submitted successfully",
      });
    } catch (err) {
      console.error("FORM ERROR:", err);
      next(err); // handled by global error handler in app.js
    }
  }
);

export default router;
