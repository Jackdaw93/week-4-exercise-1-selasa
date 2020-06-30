import React from "react";
import "../Headers/Header.css";

function Header() {
  return (
    <div>
      <nav>
        <div className="logo">
          <h4>CoffeShop</h4>
        </div>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Prouct</a>
          </li>
          <li>
            <a href="/">Service</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
