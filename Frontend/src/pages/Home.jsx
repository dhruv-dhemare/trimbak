import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import project from "../assets/vatsala_chs.png";
import {
  Home as HomeIcon,
  Building2,
  Hammer,
  LayoutGrid,
  ClipboardList,
  Key,
} from "lucide-react";

const Home = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const projectData = [
    { name: "Sai Shivam", location: "Navlakh Umbre" },
    { name: "Vatsala CHS", location: "Kothrud, Pune" },
    { name: "Dyansai Vihar", location: "Alandi Road, Pune" },
    { name: "Sneha Residency", location: "Vadgaonsheri, Pune" },
    { name: "BODH Asha Apartment", location: "Kharadi, Pune" },
    { name: "Nisarg Apartment", location: "Talegaon Dabhade" },
    { name: "Apex Residency", location: "Talegaon Dabhade" },
    { name: "BODH Classic", location: "Talegaon Dabhade" },
  ];

  const total = projectData.length;

  return (
    <>
      <Navbar className="nav" />

      <section className="hero">
        <div className="hero-overlay">
          <h1>Building Tomorrow’s Landmarks</h1>
          <p>Quality. Precision. Trust.</p>
        </div>
      </section>

      <section className="services-section">
        <div className="services-header">
          <span>WHAT WE DO</span>
          <h2>Our Services</h2>
          <p>
            Comprehensive construction solutions tailored to meet your unique
            needs, delivered with unwavering commitment to quality.
          </p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="icon-box">
              <HomeIcon />
            </div>
            <h3>Residential Construction</h3>
            <p>
              From luxury villas to modern apartments, we build homes that
              combine comfort, aesthetics, and durability.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <Building2 />
            </div>
            <h3>Commercial Construction</h3>
            <p>
              Office towers, retail spaces, and industrial facilities built to
              the highest standards of quality and efficiency.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <Hammer />
            </div>
            <h3>Renovation & Remodeling</h3>
            <p>
              Transform your existing spaces with expert renovation services
              that breathe new life into any property.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <LayoutGrid />
            </div>
            <h3>Interior & Structural Work</h3>
            <p>
              Complete interior fit-outs and structural modifications executed
              with precision and care.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <ClipboardList />
            </div>
            <h3>Project Management</h3>
            <p>
              End-to-end project oversight ensuring timelines, budgets, and
              quality standards are met.
            </p>
          </div>

          <div className="service-card">
            <div className="icon-box">
              <Key />
            </div>
            <h3>Turnkey Solutions</h3>
            <p>
              Comprehensive construction services from concept to completion,
              ready for immediate occupancy.
            </p>
          </div>
        </div>
      </section>

      <section className="project-section">
        <div className="project-header">
          <span>WHAT WE MADE</span>
          <h2>Projects Completed</h2>
          <p>
            Over 100 successful projects delivered across residential,
            commercial, and industrial sectors.
          </p>
        </div>
      </section>

      <div className="project-carousel">
        <button
          className="nav-btn left"
          onClick={() => setIndex((index - 1 + total) % total)}
        >
          ‹
        </button>

        <div className="carousel-stage">
          {projectData.map((item, i) => {
            const relativePos = (i - index + total) % total;
            let posClass = `pos-${relativePos}`;
            
            if (relativePos === total - 1) posClass = "pos-7";
            if (relativePos === total - 2) posClass = "pos-6";

            return (
              <div
                className={`carousel-card ${posClass}`}
                key={i}
                onClick={() => navigate("/projects")}
                style={{ cursor: "pointer" }}
              >
                <img src={project} alt={item.name} />
                <div className="carousel-info">
                  <h3>{item.name}</h3>
                  <span>{item.location}</span>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="nav-btn right"
          onClick={() => setIndex((index + 1) % total)}
        >
          ›
        </button>
      </div>

      <section className="process-section">
        <div className="process-header">
          <span>HOW WE WORK</span>
          <h2>Key Activities & Processes</h2>
          <p>
            A structured approach covering every phase of construction, from
            concept to completion.
          </p>
        </div>

        <div className="process-grid">
          <div className="process-card">
            <h4>1. Planning & Design</h4>
            <p>Architectural design, engineering, and site surveys.</p>
          </div>
          <div className="process-card">
            <h4>2. Site Work</h4>
            <p>Clearing, excavation, grading, and drainage.</p>
          </div>
          <div className="process-card">
            <h4>3. Foundation</h4>
            <p>Slabs, crawl spaces, and basements.</p>
          </div>
          <div className="process-card">
            <h4>4. Building Envelope</h4>
            <p>Framing, roofing, insulation, and exterior finishes.</p>
          </div>
          <div className="process-card">
            <h4>5. MEP Services</h4>
            <p>HVAC, electrical wiring, plumbing, and lighting.</p>
          </div>
          <div className="process-card">
            <h4>6. Interiors</h4>
            <p>Drywall, flooring, painting, cabinetry, and finishes.</p>
          </div>
          <div className="process-card">
            <h4>7. Project Management</h4>
            <p>Procurement, quality control, scheduling, and budgeting.</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;