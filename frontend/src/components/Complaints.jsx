import "../styles/Complaints.css";

function Complaints() {
  return (
    <section className="complaints-page">
      <div className="complaints-card">
        <h2>Submit a Complaint</h2>
        <p>Please provide your details and upload any supporting documents.</p>

        <form className="complaints-form">
          <label htmlFor="name">Full Name</label>
          <input id="name" name="name" type="text" placeholder="Your full name" required />

          <label htmlFor="email">Email Address</label>
          <input id="email" name="email" type="email" placeholder="Your email" required />

          <label htmlFor="mobile">Mobile Number</label>
          <input id="mobile" name="mobile" type="tel" placeholder="Mobile number" required />

          <label htmlFor="details">Complaint Details</label>
          <textarea id="details" name="details" rows="5" placeholder="Describe the issue" required />

          <label htmlFor="fileUpload" className="file-upload-label">
            Upload supporting document
          </label>
          <input id="fileUpload" name="fileUpload" type="file" />

          <button type="submit">Submit Complaint</button>
        </form>
      </div>
    </section>
  );
}

export default Complaints;
