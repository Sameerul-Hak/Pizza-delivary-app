import React from 'react';
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = () => {
  return (
    <div>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <section className="top-nav">
      <div>
      <Link to="/" style={{ textDecoration: "none" }}>
          <img
            src="../../assets/images/img/logo.png" // Replace with the path to your brand logo
            alt="Brand Logo"
            width="28"
            height="28"
          />
          <span className="navbar_logoname" style={{ color: 'orange', marginLeft:'7px' }}>Pizoo</span>
        </Link>
      </div>
      <input id="menu-item-toggle" type="checkbox" />
      <label className="menu-item-button-container" htmlFor="menu-item-toggle">
        <div className="menu-item-button" />
      </label>
      <ul className="menu-item">
          <li>
            <a href="#my-account">
              My Account
            </a>
          </li>
          <li>
            <a href="#pizzas">
              Pizzas
            </a>
          </li>
          <li>
            <a href="#logout">
              Logout
            </a>
          </li>
          <li>
            <Link to="/usercart">
              Cart
            </Link>
          </li>
        </ul>
    </section>
  </div>
  );
}

export default Navbar;
