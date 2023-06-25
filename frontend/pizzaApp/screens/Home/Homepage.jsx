import React from 'react';
// import Img"
import NavbarComponent from "../../components/Navbar"
import Hero from '../../components/Hero';
import howToWork1 from '../../assets/images/how-to-work1.png';
import howToWork2 from '../../assets/images/how-to-work2.png';
import howToWork3 from '../../assets/images/how-to-work3.png';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer';


function HomePage() {
  const history=useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  console.log("Home user:",user);
  const name = user.name;
  const containerStyle = {
    padding: '4rem 0',
    textAlign: 'center',
  };

  const sectionTitleStyle = {
    textTransform: 'uppercase',
    marginBottom: '1rem',
    
  };

  const sectionTextStyle = {
    marginBottom: '1rem',
  };

  const stepContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
  };

  const stepStyle = {
    flex: '0 0 33.33%',
    padding: '0 5px',
  };

  const roundBorderStyle = {
    display: 'inline-block',
    borderRadius: '50%',
    marginBottom: '1rem',
  };

  const stepImageStyle = {
    width: '100%',
    height: 'auto',
  };


  // --------------


  const titleStyle = {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#fff',
    marginTop: '5rem',
    marginBottom: '3rem',
    
  };

  const textStyle = {
    color: '#fff',
    marginBottom: '3rem',
  };

  const buttonStyle = {
    backgroundColor: '#ffc107',
    color: 'Red',
    textTransform: 'uppercase',
    marginBottom: '5rem',
    padding: '1rem',
    border: 'none',
    borderRadius: '10px',
    fontWeight: 'bold',
    
  };

  const containerStyle2 = {
    backgroundImage : 'url("../../assets/images/order.jpg")',
    backroundPosition :"top",
    height:"40vh",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:"40px"
  }

  const handleOrderNowBtn = () => {
    history("/menu")
  };

  return (
    <div >
      <Hero/>
    <div style={{height:"20vh",color:"red",justifyContent:"center"}}>Hello {name}</div>


      <div style={containerStyle}>
      <div style={sectionTitleStyle}>
        <h2 style={{ fontSize: '2rem', fontWeight: 'bold' }}>How It Works</h2>
      </div>
      <div style={sectionTextStyle}>
        <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
      </div>
      <div className="container">
        <div className="row" style={stepContainerStyle}>
          <div className="col-12 col-lg-4 col-md-4 px-5" style={stepStyle}>
            <span style={roundBorderStyle}>
              <img alt="Choose A Restaurant" src={howToWork2} style={stepImageStyle} />
            </span>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Choose A Restaurant</h3>
            <p style={sectionTextStyle}>Cras vitae dictum velit. Duis at purus enim. Cras massa massa, maximus sit amet finibus quis, pharetra eu erat.</p>
          </div>
          <div className="col-12 col-lg-4 col-md-4 px-5" style={stepStyle}>
            <span style={roundBorderStyle}>
              <img alt="Choose A Tasty Dish" src={howToWork3} style={stepImageStyle} />
            </span>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Choose A Tasty Dish</h3>
            <p style={sectionTextStyle}>Dictum velit. Duis at purus enim. Cras massa massa, maximus sit amet finibus quis, pharetra eu erat.</p>
          </div>
          <div className="col-12 col-lg-4 col-md-4 px-5" style={stepStyle}>
            <span style={roundBorderStyle}>
              <img alt="Pick Up Or Delivery" src={howToWork1} style={stepImageStyle} />
            </span>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Pick Up Or Delivery</h3>
            <p style={sectionTextStyle}>Purus enim. Cras massa massa, maximus sit amet finibus quis, pharetra eu erat.</p>
          </div>
        </div>
      </div>
    </div>

    <div style={containerStyle2} className="container-fluid text-center py-5 home-cont3">
      <p style={titleStyle} className="h1 text-uppercase text-white mt-5 mb-3">Just Order And We Will Deliver You</p>
      <p style={textStyle} className="text-white mb-3">Pellentesque eget justo eget nibh luctus semper at ut tellus.</p>
      <button type="button" style={buttonStyle} className="btn btn-warning text-uppercase mb-5" onClick={handleOrderNowBtn}><b>Order Now</b></button>
    </div>

    <br></br>
<br></br><br></br><br></br>
    <Footer/>

    </div>
  );
}

export default HomePage;
