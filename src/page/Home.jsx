import React from "react";
import Hero from "../Components/Hero";
import Details from "../Components/Details";
import SubServices from "./SubServices";
import TechnologiesSection from "./TechnologiesSection";
import Working from "./Working";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="">
      <Hero />
      <Details />
      <SubServices/>
      <TechnologiesSection />
      <Working />
      <Footer/>
    </div>
  );
}

export default Home;
