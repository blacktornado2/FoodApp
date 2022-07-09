import React from "react";
import { useDispatch } from "react-redux";
import { setCategory } from "../actions";

const Button = (props) => {
  const dispatch = useDispatch();

  return (
    <a
      onClick={() => {
        if (props.setFaqCategory) props.setFaqCategory(props.buttonName);
        if (props.changePage) props.changePage();
        if (props.method) props.method();
        if (props.addToCart) props.addToCart();
        else dispatch(setCategory(props.buttonName));
      }}
      href={props.goto}
      className={`button ${props.cName}`}
    >
      {props.buttonName}
    </a>
  );
};

export default Button;
