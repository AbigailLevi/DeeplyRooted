import React from "react";
import image from "../assets/Deeply.png";
import { Link } from "react-router-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        <img className="logo-img img-fluid" src={image} alt="logo" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="#">
            <div className="navbar-right">
              <BrowserRouter>
                <Link to="/login">Login</Link>
              </BrowserRouter>
            </div>

            <span className="sr-only">(current)</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
