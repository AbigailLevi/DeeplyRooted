import React, { useState } from "react";
import "./Home.css";
import Cards from "../views/Cards";

const Home = () => {
  const [items, Setitems] = useState ([
    { 'title':'Avocado Shampoo', 
      'paragraph':'Video to hair wash', 'image':'https://cdn.shopify.com/s/files/1/0041/8349/0671/products/Avocado_300x300.jpg?v=1539846461'},
   {  'title':'Body Scrub',
      'paragraph':'Home made body scrub', 'image': 'https://i1.wp.com/ngcblog.naturesgardencandles.com/wp-content/uploads/2018/06/shutterstock_539062723-300x300.jpg?resize=300%2C300'}, 
   {'title':'Essential Bath', 
    'paragraph':'Great bath to enjoy for peace and alone time', 'image': 'https://mike-vom-mars.com/blog/wp-content/uploads/2015/11/android_animated_nature_relaxation_relax_entspannung_entspannen_nature_natur_naturgerausche_nature_sounds_asmr_02-300x300.jpg'}]);


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
      <nav className="nav2 navbar navbar-expand-lg navbar-dark">
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
              Face <span className="sr-only">(current)</span>
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
      <p className="discribe">These videos helps with things to buy or do it yourself. </p>
      <div class="box">
        {items.map((item, index)=> {
          return (
            <Cards key={index} title={item.title} paragraph={item.paragraph} image={item.image}/>
          )
        })}
      </div>
      <h1 className="thehead2">Deeply rooted to your soul</h1>
      <p className="discribe2">hi ht hi hih hih hih hih hih </p>
      <div class="box">
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
};

export default Home;
