import React from "react";

import { motion } from "framer-motion";

import PersonalImage from "../assets/personal-img.svg";
import SVGCircle from "../assets/circle.svg";

function HeroSection() {
  return (
    <header className="personal-photo flex mx-auto content-center justify-center columns-2 gap-10">
      <img src={PersonalImage} alt="Rayan Photo" />
      <div className="name-roles-container flex flex-col justify-center text-center">
        <h1 className="font-bold">Rayan Jowair</h1>
        <h2>Front End Developer</h2>
        <img
          className="self-center"
          src={SVGCircle}
          alt="circle between roles"
          height={"20rem"}
          width={"20rem"}
        />
        <h2>UX / UI Designer</h2>
      </div>
    </header>
  );
}

export default HeroSection;
