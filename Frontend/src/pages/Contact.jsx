import React from "react";
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
              <span>Google Maps Integration</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="contact-form">
            <form>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="John Doe" />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input type="email" placeholder="john@example.com" />
                </div>
              </div>

              <div className="form-group">
                <label>Phone Number</label>
                <input type="text" placeholder="98765 43210" />
              </div>

              <div className="form-group">
                <label>Your Message</label>
                <textarea placeholder="Write your message here... " />
              </div>

              <button type="submit" className="send-btn">
                <Send size={18} />
                Send Message
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
