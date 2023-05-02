import React from "react";
import pink from "../Images/5.png";

function PinkSection() {
  return (
    <div className="pink-section" >
      <div className="left-floating" style={{top: 0}}>
        <hr className="inactive-hr" />
        <hr className="inactive-hr" />
        <hr className="inactive-hr" />
        <hr className="inactive-hr" />
        <hr className="active-hr" />
        <p>our core values</p>
        <hr className="inactive-hr" />
      </div>
      <div className="pnk-txts">
        <h2>we are believers,</h2>
        <h3>
          of the human <span>touch.</span>
        </h3>
        <p>
          That’s why, we at hubnex create solutions that matters. We are not the
          beasts hungry for every bit of market, but we value time, efforts and
          emotions as well. We create with the intention of sustaining the
          product in the market for longer than imagined. We are believers. We
          believe in you and your potential to break the trend.
        </p>
      </div>
      <div className="left-img">
        <img src={pink} />
      </div>
    </div>
  );
}

export default PinkSection;
