import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Navbar className="nav" />

      <section className="hero">
        <div className="hero-overlay">
          <h1>Building Tomorrow’s Landmarks</h1>
          <p>Quality. Precision. Trust.</p>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
