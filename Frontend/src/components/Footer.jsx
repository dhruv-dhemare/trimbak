import "./Footer.css";
import React, { useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import {
  Send
} from "lucide-react";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phno: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // null, 'success', 'error'
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error message when user starts typing
    if (submitStatus === "error") {
      setSubmitStatus(null);
      setErrorMessage("");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle validation or server errors
        if (data.errors && Array.isArray(data.errors)) {
          // Extract error messages from validation errors
          const errorMessages = data.errors
            .map((err) => `${err.field}: ${err.message}`)
            .join("\n");
          setErrorMessage(errorMessages);
        } else {
          setErrorMessage(data.message || "Failed to submit form. Please try again.");
        }
        setSubmitStatus("error");
      } else {
        // Success
        setSuccessMessage(data.message || "Form submitted successfully!");
        setSubmitStatus("success");
        // Reset form
        setFormData({
          name: "",
          email: "",
          phno: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage(
        error.message || "Network error. Please check your connection and try again."
      );
      setSubmitStatus("error");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-col brand">
          <h2 className="logo">
            TRAMBAK <span>DEVELOPERS</span>
          </h2>
          <p>
            Building trust and creating landmarks since 2005.
            Your vision, our expertise – together we build the future.
          </p>

          <div className="social-icons">
            <a href="https://www.instagram.com/trambak_developers/"><FaInstagram /></a>
          </div>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3>Our Services</h3>
          <ul>
            <li>Residential Construction</li>
            <li>Commercial Buildings</li>
            <li>Renovation</li>
            <li>Interior Work</li>
            <li>Project Management</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact Us</h3>
          <p>
            Runwal Meadows, Sr No. 915/1+2,Bld no. 12, Office No 6, Warje Pune-411058
          </p>
                          <p>Manish Borhade: 9561476203<br/>

Tanaji Bodake: 9890704321<br/>

Kalpesh Borhade: 8446500081</p>
          <p className="email">tramabkdevelopers@gmail.com</p>
        </div>

      

      <div className="footer-col">
        <h3>Get in touch</h3>
        <form className="footer-form" onSubmit={handleSubmit}>
          {/* Status Messages */}
          {submitStatus === "success" && (
            <div style={{
              padding: "12px 16px",
              marginBottom: "20px",
              backgroundColor: "#d4edda",
              color: "#155724",
              border: "1px solid #c3e6cb",
              borderRadius: "4px",
              fontSize: "14px",
            }}>
              ✓ {successMessage}
            </div>
          )}

          {submitStatus === "error" && (
            <div style={{
              padding: "12px 16px",
              marginBottom: "20px",
              backgroundColor: "#f8d7da",
              color: "#721c24",
              border: "1px solid #f5c6cb",
              borderRadius: "4px",
              fontSize: "14px",
              whiteSpace: "pre-line",
            }}>
              ✗ {errorMessage}
            </div>
          )}

          <div className="footer-form-row">
            <div className="footer-form-group">
              <label>Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
                // style={{ color: "#444" }}
              />
            </div>

            <div className="footer-form-group">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isLoading}
                // style={{ color: "#444" }}
              />
            </div>
          </div>

          <div className="footer-form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phno"
              placeholder="98765 43210"
              value={formData.phno}
              onChange={handleChange}
              required
              disabled={isLoading}
              // style={{ color: "#444" }}
            />
          </div>

          <div className="footer-form-group">
            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Write your message here... "
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isLoading}
              // style={{ color: "#444" }}
            />
          </div>

          <button
            type="submit"
            className="footer-send-btn"
            disabled={isLoading}
            style={{
              opacity: isLoading ? 0.6 : 1,
              cursor: isLoading ? "not-allowed" : "pointer",
            }}
          >
            <Send size={18} />
            <span className="btn-text">
              {isLoading ? "Sending..." : "Send Message"}
            </span>
          </button>
        </form>
      </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 Triambak Construction. All Rights Reserved.</p>
      </div>
    
    </footer>
  );
};

export default Footer;
