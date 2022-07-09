import React from "react";
import faqIMG from "../assets/images/Phones.png";
import absoluteIMG from "../assets/images/Content-Pattern.svg";
import aboutIMG from "../assets/images/Group.png";
import takeawayIMG from "../assets/images/Food-Takeaway.png";
import MainSection from "./MainSection";
import AboutSection from "./AboutSection";
import WorkSection from "./WorkSection";
import OrderNowSection from "./OrderNowSection";
import MenuSection from "./MenuSection";

const Home = () => {
  return (
    <div>
      <MainSection
        goto="/order"
        headingOne="Beautiful food & takeaway, "
        spanHeadingOne="delivered"
        headingTwo=" to your door."
        paraOne="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500."
        buttonName="Place an Order"
        spanReviewHeading="4.8 out of 5"
        reviewHeading=" based on 2000+
        reviews"
      />
      <AboutSection
        cname="about-section"
        goto="/company"
        img1={aboutIMG}
        headingOne="The home of"
        headingTwo="fresh products"
        paraOne="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500."
        buttonName="Learn about us"
      />
      <WorkSection sectionTitle="How it works." />
      <MenuSection
        goto="/order"
        headingOne="Browse our menu"
        paraOne="Use our menu to place an order online, or phone our store to"
        paraTwo="place a pickup order. Fast and fresh food."
        buttonName="See Full Menu"
      />
      <AboutSection
        cname="faq-section"
        goto="/FAQ"
        img1={faqIMG}
        img2={absoluteIMG}
        headingOne="Order online with our simple checkout."
        paraOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
        buttonName="See our FAQ"
      />
      <AboutSection
        cname="contact-section"
        img1={takeawayIMG}
        headingOne="Call our store and takeaway when it suits you best."
        paraOne="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500."
        buttonName="Ph. +61 233 2333"
      />
      <OrderNowSection
        spanHeading="Support"
        headingOne=" good food"
        headingTwo="and local business."
        buttonName="Order Now"
      />
    </div>
  );
};

export default Home;
