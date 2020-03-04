import React from "react";
import image from "../assets/Deeply.png";


const NavBar = () => {
  return (
    <nav className="navbar navbar-light">
      <a className="navbar-brand" href="#">
        <img src={image} width="150" height="75" alt="" />
      </a>
    </nav>
  );
};

export default NavBar;
