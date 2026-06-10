import StatsCard from "./StatsCard";
import FeatureCard from "./FeatureCard";
import { Link } from "react-router-dom";
import { stats, features } from "../data";
import "./../styles/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">

      <div className="hero-header">

        <div className="hero-left">
          <img
            src="https://cdn-icons-png.flaticon.com/512/684/684908.png"
            alt=""
          />

          <div>
            <h3>தமிழ்நாடு அரசு</h3>
            <h1>TamilNadu Citizen Report</h1>
            <h3>தமிழ்நாடு - மக்கள் முறைப்பீடு பணியகம்</h3>
          </div>
        </div>

        <div className="hero-buttons">
          <button className="primary-btn">
            <Link to="/complaints"> Raise Complaints</Link>
          </button>
          <button>Apply Service</button>
          <button>File RTI</button>
        </div>

      </div>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <StatsCard key={index} {...item} />
        ))}
      </div>

      <div className="feature-grid">
        {features.map((item, index) => (
          <FeatureCard key={index} title={item} />
        ))}
      </div>
    </section>
  );
}

export default HeroSection;