import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import { motion } from "framer-motion";
import HeaderImage from "../assets/HeroSection-Image.svg";

function IndexPage() {
  return (
    <div className="flex flex-col">
      <Navbar />
      <HeroSection />
      <motion.img
        className="w-1/2 self-end"
        src={HeaderImage}
        alt="Header Image"
        transition={{ duration: 3 }}
      />
    </div>
  );
}

export default IndexPage;
