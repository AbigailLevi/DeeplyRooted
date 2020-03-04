import React from "react";
import image from "../assets/Deeply.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light">
      <a className="navbar-brand" href="#">
        <img className="logo-img img-fluid" src={image} alt="logo" />
      </a>
    </nav>
  );
};

export default NavBar;
