import React from "react";
import Header from "./Header";
// import Hero from "./LeftFloating/Main";

function HeroSection() {
  return (
    <div className="Header">
      <Header />
      <div className="hero-items">
        <h2>scale your business lead the market.</h2>
        <p>let our team, help you reach your dream.</p>
        <button>get started</button>
      </div>
      <div className="left-floating">
        <hr className="active-hr" />
        <p>scale your business</p>
        <hr className="inactive-hr" />
        <hr className="inactive-hr" />
        <hr className="inactive-hr" />
        <hr className="inactive-hr" />
        <hr className="inactive-hr" />
      </div>
    </div>
  );
}

export default HeroSection;
