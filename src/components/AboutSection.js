import React from "react";
import HomeContent from "./HomeContent";
import ImageContainer from "./ImageContainer";

const AboutSection = (props) => {
  return (
    <div className={props.cname}>
      <div className="container">
        <div className="content-grid">
          <HomeContent
            goto={props.goto}
            headingOne={props.headingOne}
            headingTwo={props.headingTwo}
            paraOne={props.paraOne}
            buttonName={props.buttonName}
          />
          <ImageContainer sectionIMG={props.img1} absoluteIMG={props.img2} />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
