import React from "react";

import IconCart from "../../Images/icon-cart.svg";

import classes from "../UI/Button.module.css";

const Button = () => {
  return (
    <button className={`${classes.btn} ${classes["btn--primary"]}`}>
      <img className={`${classes["cart-image"]}`} src={IconCart} alt="#" />
      Add To Cart
    </button>
  );
};

export default Button;
