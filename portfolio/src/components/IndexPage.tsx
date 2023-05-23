import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

function IndexPage() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default IndexPage;
