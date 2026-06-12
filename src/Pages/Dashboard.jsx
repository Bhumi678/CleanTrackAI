import Navbar from "../components/Navbar";

function Dashboard() {
  return (
    <>
      <Navbar />

      <section className="dashboard">
        <h2>Citizen Dashboard</h2>

        <div className="dashboard-grid">

          <div className="dashboard-card">
            <h3>124</h3>
            <p>Total Reports</p>
          </div>

          <div className="dashboard-card">
            <h3>32</h3>
            <p>Pending Reports</p>
          </div>

          <div className="dashboard-card">
            <h3>92</h3>
            <p>Resolved Reports</p>
          </div>

          <div className="dashboard-card">
            <h3>15</h3>
            <p>Citizen Rewards</p>
          </div>

          <div className="dashboard-card">
            <h3>1.2K</h3>
            <p>Social Reach</p>
          </div>

          <div className="dashboard-card">
            <h3>48</h3>
            <p>Complaints Shared</p>
          </div>

        </div>

        <div className="recent-complaints">

          <h2>Recent Complaints</h2>

          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Issue</th>
                <th>Status</th>
                <th>Social Media</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>CT-101</td>
                <td>Garbage Dump</td>
                <td>Pending</td>
                <td>Posted on X</td>
              </tr>

              <tr>
                <td>CT-102</td>
                <td>Pothole</td>
                <td>Resolved</td>
                <td>Posted on Instagram</td>
              </tr>

              <tr>
                <td>CT-103</td>
                <td>Drain Blockage</td>
                <td>In Progress</td>
                <td>Posted on LinkedIn</td>
              </tr>

            </tbody>
          </table>

        </div>

      </section>
    </>
  );
}

export default Dashboard;