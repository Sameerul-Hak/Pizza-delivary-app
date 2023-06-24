import React from 'react';
// import Img"
import NavbarComponent from "./Navbar"
import "./hero.css";



function Hero() {
  

  return (
    <>
    <div className='bannerStyle' >
      <div className="home_nav_component">
      <NavbarComponent/>
      </div>
      <h1 id="home_title">Welcome to our Food Website</h1>

      <br/><br/><br/><br/>
      <div className="home_ban_text">
        Add some more content here - change color and font of nav optionsStyle
      </div>
    </div>
    <div className='bannerbottom'>
        {/* <span className='spanStyle'>bla bla bla</span>
        <span className='spanStyle'>bla bla bla</span>
        <span className='spanStyle'>bla bla bla</span> */}
    </div>
    <section className="home_varieties">
      <h2>Our Varieties</h2>
      <div className="home_varieties_container">
        <article className="home_variety">
          <div className="home_variety-img">
            <img id='imgid' src="../../assets/images/img/pizza1.jpg" alt="cardimg" />
          </div>
          <div className="home_variety-info">
            <h4 style={{color:"red",fontWeight:"bold"}}>Chicken Tikka</h4>
          </div>
        </article>
        <article className="home_variety">
          <div className="home_variety-img">
            <img id='imgid' src="../../assets/images/img/pizza2.jpg" alt="cardimg" />
          </div>
          <div className="home_variety-info">
            <h4 style={{color:"red",fontWeight:"bold"}}>PeriPeri Pizza</h4>
          </div>
        </article>
        <article className="home_variety">
          <div className="home_variety-img">
            <img id='imgid' src="../../assets/images/img/pizza3.jpg" alt="cardimg" />
          </div>
          <div className="home_variety-info">
            <h4 style={{color:"red",fontWeight:"bold"}}>Raspberry Dessert Pizza</h4>
          </div>
        </article>
        <article className="home_variety">
          <div className="home_variety-img">
            <img id='imgid' src="../../assets/images/img/pizza4.jpg" alt="cardimg" />
          </div>
          <div className="home_variety-info">
            <h4 style={{color:"red",fontWeight:"bold"}}>Chicken Alfredo Pizza</h4>
          </div>
        </article>
        <article className="home_variety">
          <div className="home_variety-img">
            <img id='imgid' src="../../assets/images/img/pizza5.jpg" alt="cardimg" />
          </div>
          <div className="home_variety-info">
            <h4 style={{color:"red",fontWeight:"bold"}}>Sunchoke Pizza</h4>
          </div>
        </article>
        <article className="home_variety">
          <div className="home_variety-img">
            <img id='imgid' src="../../assets/images/img/pizza6.jpg" alt="cardimg" />
          </div>
          <div className="home_variety-info">
            <h4 style={{color:"red",fontWeight:"bold"}}>Buffalo Chicken Sticks</h4>
          </div>
        </article>
      </div>
    </section>
    
    </>
  );
}

export default Hero;

