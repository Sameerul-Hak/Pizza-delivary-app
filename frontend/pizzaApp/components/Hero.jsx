import React from 'react';
// import Img"
import NavbarComponent from "./Navbar"
import "./hero.css";


function Hero() {
  

  return (
    <>
    <div className='bannerStyle' >
    <NavbarComponent/>
      <h1>Welcome to our Food Website</h1>

      <br/><br/><br/><br/>
      Add some more content here - change color and font of nav optionsStyle
    </div>
    <div className='bannerbottom'>
        <span className='spanStyle'>bla bla bla</span>
        <span className='spanStyle'>bla bla bla</span>
        <span className='spanStyle'>bla bla bla</span>
    </div>
    </>
  );
}

export default Hero;

