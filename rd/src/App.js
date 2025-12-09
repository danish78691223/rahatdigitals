import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import PanCard from "./pages/Pancard/PanCard";
import JobForms from "./pages/JobForms/JobForms";
import VoterId from "./pages/VoterId/VoterId";
import Passport from "./pages/Passport/Passport";
import Aadhar from "./pages/Aadhar/Aadhar";
import GovCertificates from "./pages/GovCertificate/GovCertificates";
import Shop from "./pages/Shop/Shop";     // ⭐ NEW SHOP PAGE IMPORT

import AdminLogin from "./pages/Admin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* ⭐ Shop Page */}
        <Route path="/shop" element={<Shop />} />

        {/* Service Pages */}
        <Route path="/apply-pan-card" element={<PanCard />} />
        <Route path="/job-application" element={<JobForms />} />
        <Route path="/voter-id" element={<VoterId />} />
        <Route path="/passport-application" element={<Passport />} />
        <Route path="/aadhar-services" element={<Aadhar />} />
        <Route path="/government-certificates" element={<GovCertificates />} />

        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
