import React from "react";
import arrow from "../Images/right-arrow.svg"
import facebook from "../Images/facebook.png"
import twitter from "../Images/twitter.png"
import linkedin from "../Images/linkedin.png"
import instagram from "../Images/instagram.png"

function FooterSection() {
  return (
    <div className="footer-section">
      <div className="main-footer">
        <div className="ftr-txts">
          <h2>let's talk</h2>
          <h3>
            have some great idea or brand to develop? Let’s build it together!
          </h3>
          <p>Our team will reach out to you as soon as possible</p>
        </div>
        <div className="ftr-form">
          <form>
            <input type="text" placeholder="FIRST NAME"/>
            <input type="text" placeholder="LAST NAME"/>
            <input type="email" placeholder="EMAIL"/>
            <input type="number" placeholder="PHONE NUMBER"/>
            <textarea placeholder="MESSAGE"></textarea>
            <button>Submit <img src={arrow}/></button>
          </form>
        </div>
      </div>
      <footer>
        <h2>Connect with us</h2>
        <div className="social-img-container">
            <img src={twitter} />
            <img src={linkedin} />
            <img src={instagram} />
            <img src={facebook} />
        </div>
      </footer>
    </div>
  );
}

export default FooterSection;
