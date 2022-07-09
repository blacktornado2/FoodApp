import React from "react";
import FooterContent from "./FooterContent";
import instaIMG from "../assets/images/instagram.svg";
import twitterIMG from "../assets/images/twitter.svg";
import youtubeIMG from "../assets/images/youtube.svg";

const Footer = (props) => {
  return (
    <div className="footer-section">
      <div className="container">
        <div className="content-grid">
          <div className="para-content ">
            <img src={props.img1} width={40} alt="" />
            <p>
              {props.paraOne}
              <br />
              {props.paraTwo}
            </p>
          </div>
          <FooterContent
            my1="a"
            title="COMPANY"
            paraOne="Home"
            paraTwo="Order"
            paraThree="FAQ"
            paraFour="contact"
          />
          <FooterContent
            my2="b"
            title="TEMPLATE"
            paraOne="Style Guide"
            paraTwo="Changelog"
            paraThree="Licence"
            paraFour="Webflow University"
          />
          <FooterContent my3="c" title="FLOWBASE" paraOne="More Cloneables" />
        </div>

        <div className="footer-powered">
          <div className="footer-left">
            <div>
              {props.headingOne}
              <span className="main-span">{props.spanHeadingOne}</span>
              &nbsp;{props.headingTwo}
              <span className="main-span">{props.spanHeadingTwo}</span>
            </div>
          </div>
          <div className="footer-right">
            <p className="social-icon">
              <img src={instaIMG} alt="" />
            </p>
            <p className="social-icon">
              <img src={twitterIMG} alt="" />
            </p>
            <p className="social-icon">
              <img src={youtubeIMG} alt="" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
