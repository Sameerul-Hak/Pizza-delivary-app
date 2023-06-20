import React from 'react';
// import Img"
import NavbarComponent from "./Navbar"


function Hero() {
  const bannerStyle = {
    backgroundImage: 'url("../assets/images/banner2.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
    color: '#fff',
    textAlign: 'center',
    fontSize: '2rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  };

  const bannerbottom={
    height:"60px",
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    backgroundColor:"red",

  }

  const spanStyle={
    margin:"80px",
    fontFamily:"Sans-serif",
    fontSize:"20px"
  }

  return (
    <>
    <div style={bannerStyle} >
    <NavbarComponent/>
      <h1>Welcome to our Food Website</h1>

      <br/><br/><br/><br/>
      Add some more content here - change color and font of nav optionsStyle
    </div>
    <div style={bannerbottom}>
        <span style={spanStyle}>bla bla bla</span>
        <span style={spanStyle}>bla bla bla</span>
        <span style={spanStyle}>bla bla bla</span>
    </div>
    </>
  );
}

export default Hero;

