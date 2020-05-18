import React from "react";
import PropTypes from "prop-types"

const Card = props => {
  return (
    <div>
    <div className="card mb-3" style={{width: "0"}, {height: ""}}>
    <div className="row no-gutters">
      <div className="col-md-4">
        {/* <img src= {props.image} style={{width: "200"}, {height: "100"}}/> */}
      </div>
      <div className="col-md-8">
        <div className="card-body">
  <h5 className="card-title">{props.title}</h5>
  <p className="card-text">{props.paragraph}</p>
          <p className="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>
  </div>
  );
};

export default Card;
