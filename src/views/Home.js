import React from "react";
import "./Home.css";
import NavBar from "../components/Navbar";

const Home = () => {
  return (
    <div>
  <div className="jumbotron">
 <h1 className="display-4">Natural Is A Trend</h1>
 <p className="lead">You may be amazed you are still unique and beautiful as your natural self. Only you can decide if this style is for you.</p>

 </div> 
<h1 className="header">What we are about ?</h1>
  <div className="card" style={{width: "36rem"}}>
  <img src="https://www.healthline.com/hlcmsresource/images/topic_centers/BeautyandSkinCare/1200x628_Can_Jojoba_Oil_Treat.jpg" className="card-img-top" alt="..."/>

</div>
</div>
  );
};

export default Home;
