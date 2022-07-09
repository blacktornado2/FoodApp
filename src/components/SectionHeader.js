import React from "react";
import orderIMG from "../assets/images/YumYum.png";

const SectionHeader = (props) => {
  return (
    <div className="section-header">
      <div className="main-container">
        <img className="transform txt" src={orderIMG} alt="" />
        <div className="title-container">
          <h1 className="section-heading transform">
            {props.headingOne}
            <span className="main-span"> {props.spanOne}</span>
            {props.headingTwo}
            <span className="main-span"> {props.spanTwo} </span>
            {props.headingThree}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SectionHeader;
