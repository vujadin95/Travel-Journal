import React from "react";
import logo from "../images/header-img.png";

function Header() {
  return (
    <header>
      <img src={logo} className="header-logo" />
      <p className="header-text">my travel journal.</p>
    </header>
  );
}
export default Header;
