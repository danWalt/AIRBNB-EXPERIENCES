import React from "react";
import PhotoGrid from "../images/photo-grid.png";
import "../style/style.css";

export default function Hero() {
  return (
    <section className="hero">
      <img src={PhotoGrid} className="photo-grid"></img>
      <div className="experiences">
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero-text">
          Join unique interactive activities led by one-of-a-kind hosts-all
          without leaving home.
        </p>
      </div>
    </section>
  );
}
