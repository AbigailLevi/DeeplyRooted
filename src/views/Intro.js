import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <html className="intro-bg">
    <div>
      <div className="title">
        <h1 className="text1">You are born to be NATURAL.</h1>
        <p className="paragraph1">
          The earth is our home and have been here for many years. The earth
          naturally grows everday uses of what people need. Being natural is
          LIFE!
        </p>
      </div>
    </div>
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <p className="firstcarousel">
      Being natural would make you feel more connected to the earth
    </p>
  
    </div>
    <div className="carousel-item">
    <p className="secondcarousel"> Since its from the earth it shouldnt cost too much, you can even grow them in your backyard!</p>
    </div>
    <div className="carousel-item">
      <p className="thirdcarousel"> Just patience and self love will get you there...</p>
    </div>
  </div>
</div>
    </html>
  );
};

export default Intro;
