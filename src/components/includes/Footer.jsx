import React from "react";
import { Link } from "react-router-dom";

import logoSvg from "../../assets/images/svg/logo.svg";

import "../../assets/scss/includes/footer.scss";

function Footer() {
  return (
    <footer className="footer container">
      <Link className="logo" exact to="/">
        <img className="small-icon" src={logoSvg} alt="Logo" />
      </Link>
      <span className="small-text">
        Данный ресурс сделан что бы помоч получить 
        и систематизировать знания и навыки
      </span>
    </footer>
  );
}

export default Footer;
