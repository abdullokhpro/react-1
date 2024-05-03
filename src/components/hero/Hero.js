import React from "react";
import "./hero.css";
import heroBg from "../../assets/images/hero/CSmJnTefxM 1.jpg";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Making time a good time by making food the good food.
          </h1>
          <p className="hero__desc">
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also specialized
            equipment,
          </p>
          <div className="hero__btns">
            <button className="hero__order__btn">Order Now</button>
            <button className="hero__food__btn">Food Details</button>
          </div>
        </div>
        <div className="hero__img">
          <img src={heroBg} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
