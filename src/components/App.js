import "../scss/main.scss";
import React from "react";
import Route from "./Route";
import Header from "./Header";
import Home from "./Home";
import Order from "./Order";
import Company from "./Company";
import FAQ from "./FAQ";
import logoIMG from "../assets/images/logo.svg";
import Footer from "./Footer";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const App = () => {
  const show = useSelector((state) => state.show);
  return (
    <div>
      <Header />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/order">
        <Order />
      </Route>
      <Route path="/company">
        <Company />
      </Route>
      <Route path="/FAQ">
        <FAQ />
      </Route>
      {show && <Cart />}
      <Footer
        img1={logoIMG}
        paraOne="Takeaway & Delivery template"
        paraTwo="for small - medium businesses."
        headingOne="Built by"
        spanHeadingOne=" Flowbase"
        headingTwo="· Powered by"
        spanHeadingTwo=" Webflow"
      />
    </div>
  );
};

export default App;
