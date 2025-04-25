import React, { useState } from "react";
import Header from "./page/Header";
import Sidebar from "./page/Sidebar";
import Home from "./page/Home";
import {Route, Routes } from "react-router-dom";
import About from "./page/About";
import QualityPolicy from "./page/QualityPolicy";
import Services from "./page/Services";
import Career from "./page/Career";
import Contact from "./page/Contact";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <>
      {/* Show Header only when Sidebar is not open */}
      {!sidebarOpen && <Header toggleSidebar={toggleSidebar} />}

      {/* Sidebar appears full screen when open */}
      {sidebarOpen && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-white">
          <Sidebar closeSidebar={toggleSidebar} />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/qualitypolicy" element={<QualityPolicy />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
};

export default Layout;
