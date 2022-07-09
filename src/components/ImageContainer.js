import React from "react";

const ImageContainer = (props) => {
  return (
    <div className="image">
      <img src={props.sectionIMG} alt="" />
      <img className="secondary" src={props.absoluteIMG} alt="" />
    </div>
  );
};

export default ImageContainer;
