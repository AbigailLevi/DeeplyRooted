import React from "react";
import "./Home.css";
import NavBar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <NavBar />
      <div>
        <div>
          <div className="card" style={{ width: "18rem" }}>
            <img
              className="card-img-top"
              src="https://yangonlife.com.mm/sites/yangonlife.com.mm/files/article_images/How-To-Use-Aloe-Vera-For-Hair.jpg"
              alt="Card image cap"
            ></img>
            <div className="card-body">
              <h5 className="card-title">Hair Care</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>

            <div className="card-body">
              <a href="#" className="card-link">
                Card link
              </a>
              <a href="#" className="card-link">
                Another link
              </a>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="https://www.buddyboybrands.com/hubfs/marijuana-cream.jpg"
            alt="Card image cap"
          ></img>
          <div className="card-body">
            <h5 className="card-title">Body Care</h5>
            <p className="card-text">
              Moisturizing Cream has many health benfits for the well being &
              health of your overall compexion and texture of your skin
            </p>
          </div>

          <div className="card-body">
            <a href="#" className="card-link">
              Card link
            </a>
            <a href="#" className="card-link">
              Another link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
