import React from "react";
import Header from "./Header";

function HeroSection() {
  return (
    <div className="Header">
      <Header />
      <div className="hero-items">
        <h2>About Us.</h2>
        <p>
          Passionate about exceptional IT services, delivering innovative
          solutions to meet unique needs.
        </p>
        <button>Read more</button>
      </div>
    </div>
  );
}

export default HeroSection;
