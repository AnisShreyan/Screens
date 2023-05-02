import React from "react";
import TextCards from "./TextCards";

function WhoAreWe() {
  return (
    <div className="who-are-we">
      <div className="wwr-top">
        <h2>Who We Are</h2>
        <p>
          Our values shape the culture of our organization and define who we
          are. These are at the core of how we work and what we do. We are:
        </p>
      </div>
      <div className="wwr-container">
        <TextCards
          title="Your Next-Gen Technology Partner"
          desc="We provide industry expertise and solution IPs to help customers achieve successful business outcomes."
        />
        <div className="divider"></div>
        <TextCards
          title="Team-Oriented"
          desc="We work together to drive change by setting the bar for future technologies and our way of working."
        />
        <div className="divider"></div>
        <TextCards
          title="Client-Focused"
          desc="We are, above all else, customer-centric. We are in it for the long run and have an unwavering passion for client success."
        />
      </div>
    </div>
  );
}

export default WhoAreWe;
