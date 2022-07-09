import React from "react";

const FooterContent = (props) => {
  return (
    <div className="footer-column">
      <div id={props.my1} className="title">
        {props.title}
      </div>
      <p>{props.paraOne}</p>
      <p>{props.paraTwo}</p>
      <p>{props.paraThree}</p>
      <p>{props.paraFour}</p>
    </div>
  );
};

export default FooterContent;
