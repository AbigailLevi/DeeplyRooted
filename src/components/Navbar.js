import React from "react";
import image from "../assets/Deeply.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md">
      <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
        </ul>
      </div>
      <div className="mx-auto order-0">
        <a className="navbar-brand mx-auto" href="#">
          <img className="logo-img img-fluid" src={image} alt="logo" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target=".dual-collapse2"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sign Up
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
            <div className="navbar-right mr-2 navbar-right">
              <Link to="/login">Login</Link>
            </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
