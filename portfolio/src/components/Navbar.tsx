import React from "react";
import { motion } from "framer-motion";
import ProfileLogo from "../assets/logo.svg";

function Navitem(props: { text: string }) {
  return (
    <>
      <motion.div className="default-navitem text-md">
        {props.text.toUpperCase()}
      </motion.div>
    </>
  );
}

const navitems = [{ name: "about" }, { name: "projects" }, { name: "contact" }];

function Navbar() {
  return (
    <>
      <div
        className="flex w-full content-center justify-around columns-2 py-3"
        style={{ backgroundColor: "#ffffff" }}>
        <img
          className="logo"
          src={ProfileLogo}
          height={"100em"}
          width={"100em"}
        />
        <div className="sm:flex hidden flex-row my-auto gap-20 sm:visible">
          <Navitem text="about" />
          <Navitem text="projects" />
          <Navitem text="contact" />
        </div>
        <div className="sm:hidden flex flex-row my-auto gap-20 sm:invisible">
          MENU
        </div>
      </div>
    </>
  );
}

export default Navbar;
