import React from "react";
import Card from "./Card";
import arrow from "../Images/arrow.png";
import strategy from "../Images/strategy.png";
import phil from "../Images/phil.png";
import telescope from "../Images/telescope.png";

function CardsSection() {
  return (
    <div className="card-section">
      <h2>Your success is our top priority -always.</h2>
      <p className="card-section-p">
        At our IT consultancy firm, we prioritize certain values and approaches
        that have helped us build a reputation for excellence in the industry.
        First and foremost, we prioritize customer satisfaction, and we always
        go the extra mile to ensure our clients' needs are met.
      </p>
      <div className="cards">
        <Card
          img={arrow}
          title="Our Mission"
          desc="Use the power of technology and our deep understanding of the industry to solve engineering challenges of any nature, scale, or complexity"
        />
        <Card
          img={phil}
          title="Our Philosophy"
          desc="Go above and beyond to bring in new perspectives, relentless energy, and utmost dedication to driving client success"
        />
        <Card
          img={telescope}
          title="Our Vision"
          desc="Harness innovation to accelerate digital transformation and drive change & client success"
        />
      <Card
        img={strategy}
        title="Our Strategy"
        desc="Leverage next-gen technologies, robust internal frameworks, and defined processes to provide best-in-class services within timelines"
      />
      </div>
    </div>
  );
}

export default CardsSection;
