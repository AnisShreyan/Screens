import React from "react";
import logo from "../Images/Logo.png";
import searchIcon from "../Images/search-icon.svg";

function Header() {
  return (
    <nav>
      <img src={logo} />
      <div className="nav-links">
        <ul>
          <li>About Us</li>
          <li>Services</li>
          <li>Industries</li>
          <li>Contact</li>
        </ul>
        <img src={searchIcon}/>
        <a>Startup Program</a>
      </div>
    </nav>
  );
}

export default Header;
