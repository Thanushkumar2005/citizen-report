import "./../styles/Navbar.css";
import logo from "./../assets/citizen-logo.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    
    <nav className="navbar">
      <div className="logo-section">
        <img src={logo} alt="logo" />

        <div>
          <h2>TamilNadu Citizen Report</h2>
          <span>தமிழ்நாடு அரசு</span>
        </div>
      </div>

      <ul className="nav-links">
        <li><Link to="/complaints">Complaints</Link></li>
        <li>Services</li>
        <li>Map</li>
        <li>Raise</li>

        <li className="signin">
          <Link to="/signin">Sign In</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;