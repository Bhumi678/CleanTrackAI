import Navbar from "../components/Navbar";

function About() {
  return (
    <>
      <Navbar />

      <section className="about-section">

        <h2>About CleanTrack AI</h2>

        <p className="about-description">
          CleanTrack AI is an AI-powered civic issue reporting platform
          designed to help citizens report sanitation issues,
          track complaints and improve transparency.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <h3>🚨 Problem</h3>

            <p>
              Citizens often struggle to report civic issues
              and receive timely updates. Traditional systems
              lack transparency and public accountability.
            </p>
          </div>

          <div className="about-card">
            <h3>💡 Solution</h3>

            <p>
              CleanTrack AI enables citizens to report issues
              with images, location data and complaint tracking,
              while increasing visibility through social media.
            </p>
          </div>

          <div className="about-card">
            <h3>📈 Impact</h3>

            <p>
              Faster issue resolution, increased citizen
              participation, better transparency and stronger
              communication between citizens and authorities.
            </p>
          </div>

        </div>

      </section>
    </>
  );
}

export default About;