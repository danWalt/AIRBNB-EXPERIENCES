import React from "react";
import Airbnb from "../images/airbnb-logo.png";
import "../style/style.css";

export default function Navbar() {
  return (
    <div className="navbar-div">
      <nav className="navbar">
        <img className="nav--logo" src={Airbnb}></img>
      </nav>
    </div>
  );
}
