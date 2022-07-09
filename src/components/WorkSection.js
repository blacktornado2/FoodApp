import React from "react";
import IMG1 from "../assets/images/Step-01.png";
import IMG2 from "../assets/images/Step-02.png";
import IMG3 from "../assets/images/Step-02.png";
import ImageCard from "./ImageCard";

const WorkSection = (props) => {
  return (
    <div className="work-section">
      <div className="container">
        <div className="section-title">
          <h2>{props.sectionTitle}</h2>
        </div>
        <div className="section-grid">
          <ImageCard
            WorkImage={IMG1}
            heading="Adapt your menu items"
            para="Easily adapt your menu using the webflow CMS and allow customers to browse your items."
          />
          <div className="line-block">
            <div className="line"></div>
          </div>
          <ImageCard
            WorkImage={IMG2}
            heading="Accept online orders & takeout"
            para="Let your customers order and pay via the powerful ecommerce system, or simple let them call your store."
          />
          <div className="line-block">
            <div className="line"></div>
          </div>
          <ImageCard
            WorkImage={IMG3}
            heading="Manage delivery or takeout"
            para="Manage your own logistics and take orders simply through the ecommerce system."
          />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
