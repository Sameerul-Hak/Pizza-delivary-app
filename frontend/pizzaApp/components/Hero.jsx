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
    <div
      className="container carousel slide carousel-multi-item"
      data-ride="carousel"
      id="variety"
    >
      <div className="controls-top ">
        <h2>Our Varieties</h2>
      </div>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <div className="col-md-4">
            <div className="card mb-2">
              <img
                className="card-img-top"
                src="../../assets/images/img/pizza1.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Chicken Tikka</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-2">
              <img
                className="card-img-top"
                src="../../assets/images/img/pizza2.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">PeriPeri Pizza</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-2">
              <img
                className="card-img-top"
                src="../../assets/images/img/pizza3.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Raspberry Dessert Pizza</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="col-md-4">
            <div className="card mb-2">
              <img
                className="card-img-top"
                src="../../assets/images/img/pizza4.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Chicken Alfredo Pizza</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-2">
              <img
                className="card-img-top"
                src="../../assets/images/img/pizza5.jpg"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Sunchoke Pizza</h5>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-2">
              <img
                className="card-img-top"
                src="../../assets/images/img/pizza6.jpg"
                alt="Card image cap"
              />
          <div className="card-body">
            <h5 className="card-title"> Buffalo Chicken Sticks</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  );
}

export default Hero;

