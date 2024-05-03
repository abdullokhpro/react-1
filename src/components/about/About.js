import React from "react";
import "./about.css";
import aboutImg from "../../assets/images/menu/menu-img.png";

function About() {
  return (
    <section id="about" className="about">
      <div className="container about__container">
        <div className="about__left">
          <img src={aboutImg} alt="" />
        </div>
        <div className="about__right">
          <h3 className="about__subtitle">About US</h3>
          <h2 className="about__title">
            Food Stalls with Persons but to Product marketing plane catlogues
            etc to.
          </h2>
          <p className="about__text">
            There are many things are needed to start the Fast Food Business.
            You need not only Just Food Stalls with Persons but also equipment
            make your marketing plane Effective.
          </p>
          <button className="about__btn">Read More</button>
        </div>
      </div>
    </section>
  );
}

export default About;
