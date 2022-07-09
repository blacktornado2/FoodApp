import React from "react";
import Button from "./Button";

const ButtonList = (props) => {
  return (
    <div className={props.cName}>
      <Button
        cName="menu-button menuDisplay-none"
        buttonName={props.menuButton1}
        setFaqCategory={props.setFaqCategory}
      />
      <Button
        setFaqCategory={props.setFaqCategory}
        cName="menu-button"
        buttonName={props.menuButton2}
      />
      <Button
        setFaqCategory={props.setFaqCategory}
        cName="menu-button"
        buttonName={props.menuButton3}
      />
      <Button
        cName="menu-button faqDisplay-none"
        buttonName={props.menuButton4}
      />
    </div>
  );
};

export default ButtonList;
