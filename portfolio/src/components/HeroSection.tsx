import React from "react";

import { motion } from "framer-motion";

import PersonalImage from "../assets/personal-img.svg";
import PersonalImageOutline from "../assets/personal-img-outline.svg";
import HeaderImage from "../assets/HeroSection-Image.svg";
import SVGCircle from "../assets/circle.svg";

function HeroSection() {
  return (
    <header className="personal-photo w-50% flex justify-center columns-2 gap-5 sm:gap-10 pt-12 sm:pt-52">
      <div className="relative">
        <motion.img
          className="w-40 sm:w-52 md:w-96"
          src={PersonalImage}
          alt="Rayan Photo"
        />
        {/* <img
          className="absolute w-40 sm:w-52 md:w-96 top-0 right-0 bottom-0 left-0"
          src={PersonalImageOutline}
          alt="Rayan Photo"
        /> */}
      </div>

      <div className="name-roles-container flex flex-col justify-center text-center gap-3 sm:gap-5">
        <h1 className="font-bold text-3xl z-10 sm:text-5xl md:text-8xl sm:py-5">
          Rayan Jowair
        </h1>
        <h2 className="font-thin text-xl z-10 sm:text-3xl md:text-4xl">
          Front End Developer
        </h2>
        <motion.img
          className="self-center h-4 w-4 sm:h-6 sm:w-6"
          src={SVGCircle}
          alt="circle between roles"
          whileHover={{
            scale: 30,
            style: {
              zIndex: -1,
            },
          }}
          transition={{ duration: 0.5 }}
        />
        <h2 className="font-thin text-xl z-10 sm:text-3xl md:text-4xl">
          UX / UI Designer
        </h2>
      </div>
    </header>
  );
}

export default HeroSection;
