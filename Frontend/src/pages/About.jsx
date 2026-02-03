import "./About.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutImage from "../assets/about_image.png";
import dirImage from "../assets/director.png";
import { Eye, Target ,CheckCircle} from "lucide-react";

const About = () => {
  return (
    <>
      <Navbar />

      <section className="about-hero">
        <div className="about-container">
          
          {/* LEFT IMAGE */}
          <div className="about-image">
            <img
              src={aboutImage}
            />

            {/* <div className="experience-badge">
              <h2>18+</h2>
              <p>Years of Excellence</p>
            </div> */}
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-content">
            <span className="about-tag">WHO WE ARE</span>

            <h1>
              Building Dreams, <br /> One Brick at a Time
            </h1>

            <p>
              At Trambak Developers, we don’t just build structures — we shape communities, 
              design futures, and bring bold visions to life. With decades 
              of combined experience in construction development, 
              we specialize in delivering high-quality residential, 
              commercial, and mixed-use projects that stand the test of time.
</p>

            <p>
From concept to completion, our team of experts is dedicated to innovation, 
sustainability, and precision. Whether it’s a custom home, an urban 
development, or a large-scale infrastructure project, we approach every
 job with integrity, transparency, and a commitment to excellence.
            </p>
          </div>

        </div>
      </section>

      <section className="vm-section">
        <div className="vm-container">

          {/* Vision */}
          <div className="v-row">
            <div className="vm-title">
              <span>Our</span>
              <span>Vision</span>
            </div>

            <div className="vm-content">
              <p className="vm-text">
                To be a leading force in shaping modern, sustainable communities
                through innovative construction and responsible development —
                creating spaces that inspire, empower, and endure for generations.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="m-row">
            <div className="vm-title">
              <span>Our</span>
              <span>Mission</span>
            </div>

            <div className="vm-content">
              <ul className="vm-list">
                <li>
                  <CheckCircle size={18} className="check-icon" />
                  Deliver high-quality, cost-effective construction and development
                  solutions on schedule by employing motivated, skilled professionals
                  and trusted partners.
                </li>
                <li>
                  <CheckCircle size={18} className="check-icon" />
                  Foster long-term relationships with clients, suppliers, and
                  communities through transparency, reliability, and superior
                  performance.
                </li>
                <li>
                  <CheckCircle size={18} className="check-icon" />
                  Drive innovation in design, construction techniques, and
                  sustainability practices that elevate industry standards.
                </li>
                <li>
                  <CheckCircle size={18} className="check-icon" />
                  Contribute positively to urban development while respecting the
                  environment and enhancing the lives of the people we serve.
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>


      <section className="directors-section">
        <div className="directors-wrapper">
          <span className="leaders-tag">LEADERSHIP</span>
          <h2 className="directors-title">Our Directors</h2>

          <div className="directors-grid">

            {/* Director 1 */}
            <div className="director-card">
              <div className="director-image">
                <img src={dirImage} alt="Manish Borhade" />
              </div>

              <div className="director-content">
                <h3>Manish Borhade</h3>
                <span className="director-qual">B.E Civil · Director</span>
                <p className="bold">Having 10 years experience in Managing Construction Sites and vendor management. </p>
                <p>
                  This hands-on experience has shaped my belief in a practical, 
                  detail-oriented approach to construction — one that balances 
                  innovation with structural integrity, and design with 
                  functionality. 
                </p>
              </div>
            </div>

            {/* Director 2 */}
            <div className="director-card">
              <div className="director-image">
                <img src={dirImage} alt="Kalpesh Borhade" />
              </div>

              <div className="director-content">
                <h3>Kalpesh Borhade</h3>
                <span className="director-qual">B.E Civil · Director</span>
                <p className="bold">Having 10 years experience as a Builder, Managing Sales and Legal aids. </p>
                <p>
                  I understand the importance of strong foundations — not just in the structures we build, but in the relationships we form with clients, partners, and communities. 
                </p>
              </div>
            </div>

            {/* Director 3 */}
            <div className="director-card">
              <div className="director-image">
                <img src={dirImage} alt="Tanaji Bodake" />
              </div>

              <div className="director-content">
                <h3>Tanaji Bodake</h3>
                <span className="director-qual">Director</span>
                <p className="bold">Having 20 years of experience as a Builder, managing construction site and client management. </p>
                <p>
                  I understand the importance of strong foundations — not just in the structures we build, but in the relationships we form with clients, partners, and communities. 
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
