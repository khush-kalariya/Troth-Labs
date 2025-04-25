import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../page/Home";
import About from "../page/About";
import QualityPolicy from "../page/QualityPolicy";
import Services from "../page/Services";
import Career from "../page/Career";
import Contact from "../page/Contact";

function Routes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/qualitypolicy" element={<QualityPolicy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Routes;
