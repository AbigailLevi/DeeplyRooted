import React from "react";
import PropTypes from "prop-types"

const Card = props => {
  return (
    <div>
      <div className="card mr-5 m-5" style={{width: "22rem"}} >
        <img src={props.image} />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.paragraph}
          </p>
          <a href={props.link} className="btn btn-info">
            Go To Video
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
