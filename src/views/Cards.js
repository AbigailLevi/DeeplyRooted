import React from "react";
import PropTypes from "prop-types"

const Cards = props => {
  return (
    <div>
      <div className="card mr-5 mb-3" style={{width: "18rem"}}>
        <img src={props.image} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.paragraph}
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cards;