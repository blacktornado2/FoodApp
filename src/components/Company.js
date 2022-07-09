import React from "react";
import teamIMG from "../assets/images/Team.png";
import SectionHeader from "./SectionHeader";
import AboutSection from "./AboutSection";
import waveIMG from "../assets/images/5e865e09d8efa3e49176b616_wave blue.svg";

const Company = () => {
  const staticData = [
    {
      heading: "62",
    },
    {
      heading: "139",
    },
    {
      heading: "34",
    },
    {
      heading: "57",
    },
  ];

  return (
    <div>
      <SectionHeader
        headingOne="Our company focuses"
        headingTwo=" on"
        spanTwo=" food and people."
      />

      <AboutSection
        cname="company-section"
        img1={teamIMG}
        headingOne="The home of"
        headingTwo="fresh products"
        paraOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
        buttonName="Learn about us"
      />

      <div className="scrollable-image">
        <div className="container">
          <div className="content-grid">
            {staticData.map((state) => (
              <div className="static-block" key={state.heading}>
                <h1 className="static">{state.heading}</h1>
                <img className="wave" src={waveIMG} alt="" />
                <div className="text-block">Fiesty Menu Items</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Company;
