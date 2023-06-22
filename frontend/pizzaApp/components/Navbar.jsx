import React from 'react';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  const navbarStyle = {
    // backgroundColor: '#f8f9fa',
    color:"white",
    padding: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };

  const logoStyle = {
    color:"white",
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const optionsStyle = {
    display: 'flex',
    color:"white",
    alignItems: 'center',
  };

  const optionLinkStyle = {
    marginLeft: '10px',
    color:"white",
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return (
    <nav style={navbarStyle}>
      <a href="/" style={logoStyle}>
        <img
          src="../../assets/images/entrybg.jpeg" // Replace with the path to your brand logo
          alt="Brand Logo"
          width="30"
          height="30"
        />
        <span color='white'>My Website</span>
      </a>
      <div style={optionsStyle}>
        <a href="#my-account" style={optionLinkStyle}>
          My Account
        </a>
        <a href="#pizzas" style={optionLinkStyle}>
          Pizzas
        </a>
        <a href="#logout" style={optionLinkStyle}>
          Logout
        </a>
        <Link to="/usercart" style={optionLinkStyle}>
          Cart
        </Link>
      </div>
    </nav>
  );
}

export default NavbarComponent;
