import React from "react";
import "../styles/navbar.min.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <ul>
          <a href="">
            <li>Home</li>
          </a>
          <a href="">
            <li>Rooms</li>
          </a>
          <a href="">
            <li>Experience</li>
          </a>
          <a href="">
            <li>About</li>
          </a>
        </ul>
        <div className="logo">
          <img
            src="https://moonlit-react.netlify.app/assets/images/logo/logo.svg"
            alt="header logo"
          />
        </div>
        <div className="buttons">
          <button className="button">Sign in</button>
          <button className="button">Sign up</button>
          <button className="button BookButton">Book Now</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
