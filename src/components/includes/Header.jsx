import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import burgerSvg from "../../assets/images/svg/burger.svg";
import logoSvg from "../../assets/images/svg/logo.svg";
import signInSvg from "../../assets/images/svg/signIn.svg";
import signUpSvg from "../../assets/images/svg/signUp.svg";
import searchSvg from "../../assets/images/svg/search.svg";

import "../../assets/scss/includes/header.scss";

function Header() {
  return (
    <header className="header container">
      <Link className="logo" exact to="/">
        <img className="small-icon" src={logoSvg} alt="Logo" />
      </Link>

      <div className="header__left">
        <img src={burgerSvg} alt="Burger" />
      </div>

      <nav className="header__right">
        <span className="search">
          <input
            className="input input__default"
            type="text"
            name="search"
            placeholder="Поиск..."
            autoComplete="off"
          />
          <img src={searchSvg} className="search__icon" alt="Search" />
        </span>

        <ul className="nav">
          <li>
            <NavLink to="/auth">
              <img src={signInSvg} alt="signIn" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/registration">
              <img src={signUpSvg} alt="signUn" />
            </NavLink>
          </li>
          {/* <li>
            <NavLink exact to="/posts">Posts</NavLink>
          </li>
          <li>
            <NavLink to="/posts/123">Post 123</NavLink>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
