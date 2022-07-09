import React from "react";
import Button from "./Button";

const OrderNowSection = (props) => {
  return (
    <div className="order-section">
      <div className="content-grid">
        <div className="content-img"></div>
        <div className="section-content">
          <h1>
            <span className="dark-span">{props.spanHeading}</span>
            {props.headingOne}
            <br />
            {props.headingTwo}
          </h1>
          <Button
            goto={props.goto}
            cName="white-button"
            buttonName={props.buttonName}
          />
        </div>
      </div>
    </div>
  );
};

export default OrderNowSection;
