import React from "react";
import "./navbar.css";
import navLogo from "../../assets/images/navbar/logo.svg";
import { NAVBAR_ITEMS } from "../../static";

function Navbar() {
  const headerNav = NAVBAR_ITEMS?.map((val, inx) => (
    <li className="header__nav__link" key={inx}>
      {val}
    </li>
  ));

  return (
    <nav className="header__nav">
      <div className="container header__nav__container">
        <div className="header__nav__left">
          <div className="header__nav__logo">
            <a href="../../../public/index.html">
              <img src={navLogo} alt="" />
            </a>
          </div>
          <ul className="header__nav__list">{headerNav}</ul>
        </div>
        <div className="header__nav__right">
          <button className="header__nav__btn">Booking Now</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
