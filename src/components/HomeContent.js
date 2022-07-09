import React from "react";
import Button from "./Button";

const HomeContent = (props) => {
  return (
    <div className="content-block">
      <h2>
        {props.headingOne}
        <br />
        {props.headingTwo}
      </h2>
      <p>
        {props.paraOne}
        <br />
        {props.paraTwo}
      </p>
      <Button goto={props.goto} buttonName={props.buttonName} />
    </div>
  );
};

export default HomeContent;
