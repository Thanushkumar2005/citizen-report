import "./../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h3>TamilNadu Citizen Report</h3>
          <p>
            Empowering citizens to raise complaints,
            request services, and track public issues
            across Tamil Nadu.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Complaints</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Live Map</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@tncitizen.gov.in</p>
          <p>Phone: 1800-123-4567</p>
          <p>Chennai, Tamil Nadu</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 TamilNadu Citizen Report | Government of Tamil Nadu
      </div>
    </footer>
  );
}

export default Footer;