import React from "react";

import Button from "./UI/Button";

import CardImageMobile from "../Images/image-product-mobile.jpg";
import CardImageDesktop from "../Images/image-product-desktop.jpg";

import classes from "./Card.module.css";

const Card = () => {
  return (
    <div className={classes.card}>
      <picture>
        <source media="(min-width: 650px)" srcSet={CardImageDesktop} />
        <source media="(min-width: 300px)" srcSet={CardImageMobile} />
        <img
          className={`${classes["card-image"]}`}
          src={CardImageMobile}
          alt="parfum"
        />
      </picture>
      <div className={`${classes["card-body"]}`}>
        <span className={classes.item}>PERFUME</span>
        <h1 className={`${classes["parfum-name"]}`}>
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className={`${classes["parfum-description"]}`}>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className={`${classes["price-items"]}`}>
          <span className={`${classes["new-price"]}`}>$149.99</span>
          <span className={`${classes["old-price"]}`}>$169.99</span>
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Card;
