import React from "react";

const ImageCard = (props) => {
  return (
    <div className="image-card">
      <img className="work-image" src={props.WorkImage} alt="" />
      <div className="card-content">
        <h5>{props.heading}</h5>
        <p>{props.para}</p>
      </div>
    </div>
  );
};

export default ImageCard;
