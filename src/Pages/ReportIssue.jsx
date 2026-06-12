import Navbar from "../components/Navbar";

function ReportIssue() {
  return (
    <>
      <Navbar />

      <section className="report-page">
        <h2>Report an Issue</h2>

        <form className="report-form">

          <input
            type="text"
            placeholder="Issue Title"
          />

          <textarea
            placeholder="Describe the issue"
          />

          <input
            type="text"
            placeholder="Location"
          />

          <input
            type="file"
          />

          <label>
            <input type="checkbox" />
            Share complaint on social media
          </label>

          <button type="submit">
            Submit Complaint
          </button>

        </form>
      </section>
    </>
  );
}

export default ReportIssue;