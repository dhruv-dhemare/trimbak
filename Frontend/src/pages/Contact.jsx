import React, { useState } from "react";
import "./Contact.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  MapPin,
  Phone,
  Mail,
  Send
} from "lucide-react";

const Contact = () => {
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
    <>
      <Navbar />

      <section className="contact-section">
        <div className="contact-header">
          <span className="contact-subtitle">GET IN TOUCH</span>
          <h1 className="contact-title">Let's Build Together</h1>
        </div>

        <div className="contact-container">
          {/* LEFT */}
          <div className="contact-info">
            <div className="info-item">
              <div className="icon-box">
                <MapPin size={20} />
              </div>
              <div>
                <div className="heading">Visit Us</div>
                <p>
                  Runwal Meadows, Sr No. 915/1+2,Bld no. 12, Office No 6, Warje Pune-411058
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">
                <Phone size={20} />
              </div>
              <div>
                <div className="heading">Call Us</div>
                <p>Manish Borhade: 9561476203<br/>

Tanaji Bodake: 9890704321<br/>

Kalpesh Borhade: 8446500081</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">
                <Mail size={20} />
              </div>
              <div>
                <div className="heading">Email Us</div>
                <p>tramabkdevelopers@gmail.com</p>
              </div>
            </div>

            <div className="map-box">
              <iframe
                title="Google Map"
                width="100%"
                height="100%"
                style={{ border: 0, borderRadius: "12px" }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Runwal%20Meadows%20Warje%20Pune&z=16&output=embed"
              ></iframe>
            </div>
          </div>

          {/* RIGHT */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>
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

              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    style={{ color: "#444" }}
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    style={{ color: "#444" }}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input
                  type="text"
                  name="phno"
                  placeholder="98765 43210"
                  value={formData.phno}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  style={{ color: "#444" }}
                />
              </div>

              <div className="form-group">
                <label>Your Message</label>
                <textarea
                  name="message"
                  placeholder="Write your message here... "
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isLoading}
                  style={{ color: "#444" }}
                />
              </div>

              <button
                type="submit"
                className="send-btn"
                disabled={isLoading}
                style={{
                  opacity: isLoading ? 0.6 : 1,
                  cursor: isLoading ? "not-allowed" : "pointer",
                }}
              >
                <Send size={18} />
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
