import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./layout/header";
import HomePage from "./pages/home";
import QualificationPage from "./pages/education";
import Footer from "./layout/footer";
import Skills from "./pages/skill";
import CertificatePage from "./pages/certificates";
import Hobbies from "./pages/hobbies";
import ProjectsPage from "./pages/project";
import ScrollToTop from "./layout/scroll";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/skill" element={<Skills />} />
        <Route path="/education" element={<QualificationPage />} />
        <Route path="/certificates" element={<CertificatePage />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

