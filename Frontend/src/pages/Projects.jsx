import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Projects.css";
import bodh_classic from "../assets/bodh_classic.png";
import nisarg_apt from "../assets/nisarg_apt.png";
import sneha_residency from "../assets/sneha_residency.png";
import vatsala_chs from "../assets/vatsala_chs.png";


const Projects = () => {
const projects = [
  {
    name: "Sai Shivam",
    location: "Navlakh Umbre",
    status: "Ongoing",
    units: 72,
    areaSqFt: 36000,
    completionYear: "On-Going",
    image: vatsala_chs,
  },
  {
    name: "Vatsala CHS",
    location: "Kothrud, Pune",
    status: "Ongoing",
    units: 23,
    areaSqFt: 16500,
    completionYear: "On-Going",
    image: vatsala_chs,
  },
  {
    name: "Dyansai Vihar",
    location: "Alandi Road, Pune",
    status: "Completed",
    units: 28,
    areaSqFt: 18000,
    completionYear: "2009–10",
    image: vatsala_chs,
  },
  {
    name: "Sneha Residency",
    location: "Vadgaonsheri, Pune",
    status: "Completed",
    units: 20,
    areaSqFt: 14000,
    completionYear: "2010–12",
    image: sneha_residency,
  },
  {
    name: "BODH Asha Apartment",
    location: "Kharadi, Pune",
    status: "Completed",
    units: 18,
    areaSqFt: 12000,
    completionYear: "2011–13",
    image: bodh_classic,
  },
  {
    name: "Nisarg Apartment",
    location: "Talegaon Dabhade",
    status: "Completed",
    units: 12,
    areaSqFt: 8286,
    completionYear: "2012–14",
    image: nisarg_apt,
  },
  {
    name: "Apex Residency",
    location: "Talegaon Dabhade",
    status: "Completed",
    units: 16,
    areaSqFt: 9500,
    completionYear: "2014–16",
    image: vatsala_chs,
  },
  {
    name: "BODH Classic",
    location: "Talegaon Dabhade",
    status: "Completed",
    units: 16,
    areaSqFt: 11100,
    completionYear: "2015–17",
    image: bodh_classic,
  }
];

  return (
    <>
      <Navbar />

      <section className="projects-section">
        <div className="projects-header">
          <span className="projects-subtitle">OUR PROJECTS</span>
          <h1 className="projects-title">Building Landmarks Across Pune</h1>
        </div>

        <div className="projects-container">
          {projects.map((p, i) => (
            <div className="project-card" key={i}>
              <div className="project-image">
                <img src={p.image} alt={p.name} />
                <span className={`status-pill ${p.status.toLowerCase()}`}>
                  {p.status === "Ongoing" ? "Ongoing" : p.completionYear}
                </span>
                <div className="project-info">
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-location">{p.location}</p>
                  <p><strong>Units:</strong> {p.units}</p>
                  <p><strong>Area:</strong> {p.areaSqFt} sq. ft.</p>
                </div>
              </div>
            </div>


          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Projects;
