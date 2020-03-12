import React, { useState } from "react";
import "./Home.css";
import Card from "../views/Card";
import { Link } from "react-router-dom";

const Home = () => {
  const [items] = useState([
    {
      title: "Avocado Shampoo",
      paragraph:
        "The main ingredients avocado and aloe will help with growth and moisture",
      link: "https://www.youtube.com/watch?v=h83jRsv9oCQ",
      image:
        "https://i.ytimg.com/an_webp/h83jRsv9oCQ/mqdefault_6s.webp?du=3000&sqp=COT1qPMF&rs=AOn4CLAoqTPG59H-hj2gUuBfjvVGWmpbuA"
    },
    {
      title: "Body Scrub",
      paragraph:
        "Home made body scrub, which helps exfoliate the body for any dead skin cells",
      link: "https://www.youtube.com/watch?v=7cZesX1mtSQ",
      image:
        "https://i.ytimg.com/an_webp/7cZesX1mtSQ/mqdefault_6s.webp?du=3000&sqp=COjqqPMF&rs=AOn4CLD6G7j7mJtdJfgC6DwNlEvnlAKRtA"
    },
    {
      title: "Essential Bath",
      paragraph:
        "An essential bath to have when you need some space, peace, and alone time",
      link: "https://www.youtube.com/watch?v=evVkGuSADSU",
      image:
        "https://i.ytimg.com/an_webp/evVkGuSADSU/mqdefault_6s.webp?du=3000&sqp=CLXtqPMF&rs=AOn4CLA8VUzL4grd2LDD7ibPFslm_VUymA"
    }
  ]);

  return (
    <div className="colorback">
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-3">Welcome Back</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </div>
      </div>
      <nav className="nav2 navbar navbar-expand-sm navbar-dark">
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
        <div
          className="navnav collapse navbar-collapse"
          id="navbarNavAltMarkup"
        >
          <div className="bottomN navbar-nav">
            <a className="firstnav-item nav-link active" href="#">
              <Link to="/home/face">Face</Link>{" "}
              <span className="sr-only">(current)</span>
            </a>
            <a className="secondnav-item nav-link" href="#">
              Body
            </a>
            <a className="thirdnav-item nav-link" href="#">
              Internal
            </a>
            <a
              className="fourthnav-item nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </div>
        </div>
      </nav>
      <h1 className="thehead">Deeply rooted to the earth</h1>
      <h3 className="thehead">Videos</h3>
      <p className="discribe">
        These videos helps with things to buy or do it yourself.{" "}
      </p>
      <div class="box">
        {items.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              paragraph={item.paragraph}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
      <h1 className="thehead2">Deeply rooted to your soul</h1>
      <p className="discribe2">hi ht hi hih hih hih hih hih </p>
      <div class="box">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
