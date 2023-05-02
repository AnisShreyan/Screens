import React from "react";

function BalloonSection() {
  return (
    <div className="balloon">
      <div className="left-floating-black">
        <hr className="inactive-hr-black" />
        <hr className="inactive-hr-black" />
        <hr className="inactive-hr-black" />
        <hr className="active-hr-black" />
        <p>numbers & testimonials</p>
        <hr className="inactive-hr-black" />
        <hr className="inactive-hr-black" />
      </div>
      <div>
        <div className="bln-div">
          <h2>200</h2>
          <p>Leading businesses</p>
        </div>
        <div className="bln-div">
          <h2>200</h2>
          <p>Leading businesses</p>
        </div>
        <div className="bln-tag">
          <p>
            Not only do we help businesses reach their goals, but help build the
            empire.
          </p>
          <p>-Satya Nadela</p>
        </div>
      </div>
    </div>
  );
}

export default BalloonSection;
