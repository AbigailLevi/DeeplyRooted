import React, { useState } from "react";
import "./Home.css";
import Card from "../views/Card";
import { Link } from "react-router-dom";

const Home = () => {
  const [items] = useState([
    {
      title: "Face",
      paragraph:
        "The main ingredients avocado and aloe will help with growth and moisture",
      // image:
      //   "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTIIIdCyW9gKR9dW19kre38YR6uZtsOECvO7reeixGaS4fgbIKi&usqp=CAU"
    },
     {
    title: "Body",
       paragraph:
         "Home made body scrub, which helps exfoliate the body for any dead skin cells",
       image:
         "https://i.ytimg.com/an_webp/7cZesX1mtSQ/mqdefault_6s.webp?du=3000&sqp=COjqqPMF&rs=AOn4CLD6G7j7mJtdJfgC6DwNlEvnlAKRtA"
     },
     {
       title: "Hair",
       paragraph:
         "An essential bath to have when you need some space, peace, and alone time",
       image:
         "https://i.ytimg.com/an_webp/evVkGuSADSU/mqdefault_6s.webp?du=3000&sqp=CLXtqPMF&rs=AOn4CLA8VUzL4grd2LDD7ibPFslm_VUymA"
     }
  ]);

  return (

    <html className="home-bg">
      <div className="jumbotron jumbotron-fluid">
      <img class="img" src="https://post.greatist.com/wp-content/uploads/2019/11/Lemon_Honey_1200x628-facebook.jpg"/>
      <div className="right-title">
        <h1 className="titleJ">
          <b> Deeply Rooted to the earth</b> 
          </h1>
          <p1 className="paraJ"> We've been disconnected from the earth, <br/> what we don't know is that the earth bringeth medicine, <br/> cures, and miracles. Industries 
          will sell us unnatural products <br/> that can cause another problem to arise. The earth covers everything we need, <b>IT'S TIME TO GO BACK TO OUR ROOTS!</b> </p1>
        
        </div> 
     {/* <img class="cover" src="https://cdn.pixabay.com/photo/2018/07/02/21/29/daylily-3512540__340.jpg"/>  */}
     
      </div> 

      <h1 className="thehead">Deeply rooted to the earth</h1>
     <div className="container">
       <div className="row">
         {/* this tis the first box */}
      <div class="card ml-4" style={{width: "22rem"}}>
  <img src="https://i.pinimg.com/564x/64/16/ee/6416eea45861911f900974b0502b7f1d.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Face</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-dark">
    <Link to="/home/face">Click Here</Link>
     <span className="sr-only">(current)</span>
    </a>
  </div>
</div>
{/* this is the second box */}
<div class="card ml-4" style={{width: "22rem"}}>
  <img src="https://i.pinimg.com/originals/e8/b7/f0/e8b7f0063cc6d7826db480d8a303e2ac.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Body</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-dark">
    <Link to="/home/body">Click Here</Link>
     <span className="sr-only">(current)</span>
    </a>
  </div>
</div>
    {/* this is the third box */}
<div class="card ml-4" style={{width: "22rem"}}>
  <img src="https://mk0hairrulesv2n8duml.kinstacdn.com/wp-content/uploads/2020/01/kinky-hair-closeup.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Hair</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-dark"><Link to="/home/hair">Click Here</Link>
     <span className="sr-only">(current)</span></a>
  </div>
</div>

</div>
</div>
     {/* <div class="box">
        {items.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              paragraph={item.paragraph}
              image={item.image}
            />
          );
        })}
      </div> */}
    </html>
  );
};

export default Home;
