import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Projects.css";
import project1 from "../assets/project1.png";


const Projects = () => {
const projects = [
  {
    name: "Sai Shivam",
    location: "Navlakh Umbre",
    status: "Ongoing",
    description: "An expansive 72-unit development currently under construction, designed to be a landmark in the Navlakh area. This project features state-of-the-art infrastructure and is perfectly situated to offer residents a blend of modern convenience and tranquil surroundings.",
    image: project1,
  },
  {
    name: "Vatsala CHS",
    location: "Kothrud, Pune",
    status: "Ongoing",
    description: "A high-demand residential project in the prime locality of Kothrud, featuring 23 units with a focus on premium community living. The development offers easy access to the city's best schools and commercial hubs while maintaining a private, secure atmosphere.",
    image: project1,
  },
  {
    name: "Dyansai Vihar",
    location: "Alandi Road, Pune",
    status: "Completed",
    description: "A well-planned residential community featuring 28 units, completed in 2010 with a focus on essential amenities and open spaces. It stands as a testament to durable construction and has developed into a vibrant, close-knit neighborhood over the years.",
    image: project1,
  },
  {
    name: "Sneha Residency",
    location: "Vadgaonsheri, Pune",
    status: "Completed",
    description: "Modern residential living space comprising 20 units, known for its strategic location near IT hubs and quality construction. The apartments are designed to maximize natural light and ventilation, providing a refreshing retreat in the bustling suburb of Vadgaonsheri.",
    image: project1,
  },
  {
    name: "BODH Asha Apartment",
    location: "Kharadi, Pune",
    status: "Completed",
    description: "A cozy 18-unit development in the growing hub of Kharadi, offering a perfect balance of urban comfort and suburban peace. Its proximity to major IT parks makes it an ideal choice for professionals seeking a minimal commute and a high quality of life.",
    image: project1,
  },
  {
    name: "Nisarg Apartment",
    location: "Talegaon Dabhade",
    status: "Completed",
    description: "A serene residential project offering 12 units designed specifically for peaceful living away from the city bustle. Located in the scenic Talegaon Dabhade, it offers fresh air, scenic views, and a relaxed pace of life suitable for families and retirees alike.",
    image: project1,
  },
  {
    name: "Apex Residency",
    location: "Talegaon Dabhade",
    status: "Completed",
    description: "A modern 16-unit complex providing contemporary housing solutions with high-quality finishes and smart space utilization. The project emphasizes community bonding and offers a secure, well-maintained environment for its residents.",
    image: project1,
  },
  {
    name: "BODH Classic",
    location: "Talegaon Dabhade",
    status: "Completed",
    description: "A premium 16-unit project blending traditional architectural values with modern urban requirements. Known for its robust build quality and thoughtful layout, it offers a sophisticated living experience in the heart of Talegaon.",
    image: project1,
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
              <h3 className="project-name">{p.name}</h3>
              <p className="project-location">{p.location}</p>
              <div className="project-image">
                <img src={p.image} alt={p.name} />
                <span className={`status-pill ${p.status.toLowerCase()}`}>
                  {p.status}
                </span>
              </div>
              <p className="project-description">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Projects;
