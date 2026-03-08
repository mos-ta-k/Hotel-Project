import React from "react";
import Navbar from "./Components/Navbar";
import "../src/styles/main.min.css";
import HeroSection from "./Components/HeroSection";
import FormSection from "./Components/formSection";
import AboutSection from "./Components/AboutSection";
import FacilitiesSection from "./Components/facilitiesSection";
import RoomSection from "./Components/RoomSection";

const App = () => {
  return (
    <div className="container">
      <Navbar />
      <HeroSection />
      <FormSection />
      <AboutSection />
      <FacilitiesSection />
      <RoomSection />
    </div>
  );
};

export default App;
