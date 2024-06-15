import React from "react";
import { Footer } from "../ui/Footer";
import { Navbar } from "../ui/Navbar";
import { About } from "../sections/About";
import { Features } from "../sections/Features";
import Ayurveda from "../sections/Ayurveda"; 
import Yoga from "../sections/Yoga";
import Slider from "../sections/Slider"

export const LandingPage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <About />
      {/* <Slider/> */}
      <Features />
      <Ayurveda />
      <Yoga/>
      <Footer />
    </div>
  );
};

export default LandingPage;
