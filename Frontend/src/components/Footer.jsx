import "./Footer.css";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Footer = () => {
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
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        {/* Quick Links */}
        {/* <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div> */}

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

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 Triambak Construction. All Rights Reserved.</p>
        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
