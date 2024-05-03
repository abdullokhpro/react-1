import React from "react";
import "./features.css";
import { FEATURES_CARD } from "../../static";

function Features() {
  const featuresCard = FEATURES_CARD?.map((val, inx) => (
    <div className="features__card">
      <img src={val.img} alt="" />
      <h3 className="features__card__title">{val.title}</h3>
      <p className="features__card__text">{val.text}</p>
    </div>
  ));

  return (
    <section id="features" className="features">
      <div className="container">
        <h3 className="features__subtitle">Features</h3>
        <h2 className="features__title">Food with a New Passion</h2>

        <div className="features__cards">{featuresCard}</div>
      </div>
    </section>
  );
}

export default Features;
