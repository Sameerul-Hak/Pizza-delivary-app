import React from 'react';

function Footer() {
  const containerStyle = {
    backgroundColor: '#111',
    padding: '2rem',
    textAlign: 'center',
    borderTop: '1px solid #333',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  };

  const textStyle = {
    fontSize: '0.875rem',
    marginBottom: '1rem',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  const logoStyle = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  return (
    <footer style={containerStyle}>
      <h2 style={logoStyle}>Pizza Delight</h2>
      <div style={textStyle}>
        &copy; {new Date().getFullYear()} Pizza Delight. All rights reserved.
      </div>
      <div style={textStyle}>
        Designed and developed by <a href="https://www.example.com" style={linkStyle}>Your Name</a>
      </div>
    </footer>
  );
}

export default Footer;
