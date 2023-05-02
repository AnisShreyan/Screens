import React from "react";
import mobile from "../Images/3.png";

function MobilePrevew() {
  return (
    <div className="mobile-preview">
            <div className="left-floating-black">
        <hr className="inactive-hr-black" />
        <hr className="inactive-hr-black" />
        <hr className="inactive-hr-black" />
        <hr className="active-hr-black" />
        <p>numbers & testimonials</p>
        <hr className="inactive-hr-black" />
        <hr className="inactive-hr-black" />
      </div>
      <div className="mob-contnr">
        <div className="mob-cta">
          <h2>let us build it for you.</h2>
          <p>
            providing you industry level solutions to cater your needs and help
            you become the next big thing.
          </p>
          <button>get started</button>
        </div>
        <div className="mob-img">
          <img src={mobile} />
        </div>
      </div>
    </div>
  );
}

export default MobilePrevew;
