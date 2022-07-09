import React from "react";
import Banner from "./Banner";
import NavBar from "./Navbar";

const Header = () => {
  return (
    <div>
      <Banner />
      <NavBar
        home="Home"
        order="Order"
        company="Company"
        faq="FAQ"
        contact="Contact"
      />
    </div>
  );
};

export default Header;
