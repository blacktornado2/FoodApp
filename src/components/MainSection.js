import React from "react";
import reviewIMG from "../assets/images/trustpilot-logo.svg";
import mainIMG from "../assets/images/Hero-Image.png";
import ImageContainer from "./ImageContainer";
import Button from "./Button";

const MainSection = (props) => {
  return (
    <div className="main-section">
      <div className="main-container">
        <div className="main-content">
          <h1 className="main-heading transition">
            {props.headingOne}
            <span className="main-span">{props.spanHeadingOne}</span>
            {props.headingTwo}
          </h1>
          <p className="main-para transition">{props.paraOne}</p>
          <div className="main-button">
            <Button goto={props.goto} buttonName={props.buttonName} />
          </div>
          <div className="main-review transition">
            <img className="review-logo" src={reviewIMG} alt="review-logo" />
            <div className="review-content">
              <span className="main-span">{props.spanReviewHeading}</span>
              {props.reviewHeading}
            </div>
          </div>
        </div>
        <ImageContainer sectionIMG={mainIMG} />
      </div>
    </div>
  );
};

export default MainSection;
