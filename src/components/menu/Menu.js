import React from "react";
import "./menu.css";
import { MENU_PRODUCT } from "../../static";
import menuPlus from "../../assets/images/menu/plus-icon.svg";

function Menu() {
  const menuProduct = MENU_PRODUCT?.map((val) => (
    <div key={val.id} className="menu__card">
      <div className="menu__card__top">
        <img src={val.img} alt="" />
      </div>
      <div className="menu__card__bottom">
        <div className="menu__card__intro">
          <h4 className="menu__card__title">{val.title}</h4>
          <p className="menu__card__price">{val.price}</p>
        </div>

        <p className="menu__card__text">{val.text}</p>
        <div className="menu__card__btns">
          <button className="menu__card__plus">
            <img src={menuPlus} alt="" />
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <section id="menu" className="menu">
      <div className="container">
        <p className="menu__subtitle">MENU</p>
        <h2 className="menu__title">Food Full of treaty Love</h2>
        <p className="menu__text">
          There are many things are needed to start the Fast Food Business. You
          need not only Just Food Stalls with Persons but also specialized
          equipment, Skills to manage Customers,
        </p>
        <div className="menu__cards">{menuProduct}</div>
      </div>
    </section>
  );
}

export default Menu;
