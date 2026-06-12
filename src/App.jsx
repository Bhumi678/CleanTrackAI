import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReportIssue from "./Pages/ReportIssue";
import Home from "./Pages/Home";
import Features from "./Pages/Features";
import HowItWorks from "./Pages/HowItWorks";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Login from "./Pages/Login";
import SocialImpact from "./Pages/SocialImpact";
import "./App.css";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/report" element={<ReportIssue />} />
        <Route path="/social-impact" element={<SocialImpact />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;