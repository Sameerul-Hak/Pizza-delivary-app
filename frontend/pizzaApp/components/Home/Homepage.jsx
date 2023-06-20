import React from 'react';
// import Img"
import NavbarComponent from "../Navbar"
import Hero from '../Hero';

import howToWork1 from '../../assets/images/how-to-work1.png';
import howToWork2 from '../../assets/images/how-to-work2.png';
import howToWork3 from '../../assets/images/how-to-work3.png';

import Footer from '../Footer';


function HomePage() {

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
    padding: '1.5rem 1rem',
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
    // Handle the "Order Now" button click event
  };

  return (
    <div >
      <Hero/>



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

    <br></br>inga inoru section add pannanum
<br></br><br></br><br></br>
    <Footer/>

    </div>
  );
}

export default HomePage;




// import React, { Component } from 'react';
// // import Navbar from '../components/Navbar';
// import Navbar2 from '../Navbar';
// // import Footer from '../components/Footer';
// import Img from "../../assets/images/entrybg.jpeg";

// import 'bootstrap/dist/css/bootstrap.css';
// import './homepage.css'

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// class Home extends Component {
//   constructor() {
//     super()
//     this.state = {
//       homeSearchBarText: "",
//     }
//     this.handleSearchBar = this.handleSearchBar.bind(this);
//   }

//   handleSearchBar() {
//     // const { homeSearchBarText } = this.state
//     // if (homeSearchBarText) {
//     //   this.props.history.push('/restaurants', this.state.homeSearchBarText)
//     // }
//   }

//   handleOrderNowBtn(){
//     // this.props.history.push('/restaurants')
//   }

//   render() {
//     return (
//       <div>
//         {/* Home Navbar Section */}
//         <div className="container-fluid home-cont1">
//           <div className="">
//             {/* <Navbar history={this.props.history} /> */}
//             <Navbar2 history={this.props.history} />
//             <div className="container home-cont1-text">
//               <h1 className="h1 text-uppercase text-white text-center mb-4"><strong>Organic Fast Food Made <br /> Easy And Healthy</strong></h1>
//               <div className="container">
//                 <div className="row justify-content-center">
//                   <div className="col-lg-6 col-md-6 col-sm-12 mb-3">
//                     <input type="text" className="form-control text-uppercase" id="searchText" placeholder="Restaurant Name" onChange={(e) => { this.setState({ homeSearchBarText: e.target.value }) }} />
//                   </div>
//                   <div className="col-lg-2 col-md-2 col-sm-12">
//                     <button type="button" className="btn btn-warning mb-2 text-uppercase btn-block rounded-0" onClick={this.handleSearchBar}><b>Search</b></button>
//                   </div>
//                 </div>
//               </div>
//               <div className="container text-white text-center mt-4">
//                 <div className="col-lg-7 col-md-8 col-sm-12 mx-auto">
//                   <img style={{ width: "95%" }} alt="" src={Img} />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Home Number section */}
//         <div className="container-fluid py-2 bg-warning">
//           <div className="row">
//             <div className="col-lg-4 col-md-4 col-sm-12">
//               <p className="my-3 text-lg-right text-md-right text-center text-white"><b className="mr-2 h5">18</b>Restaurant</p>
//             </div>
//             <div className="col-lg-4 col-md-4 col-sm-12">
//               <p className="my-3 text-center text-white"><b className="mr-2 h5">9</b>People Served</p>
//             </div>
//             <div className="col-lg-4 col-md-4 col-sm-12">
//               <p className="my-3 text-lg-left text-md-left text-center text-white"><b className="mr-2 h5">44</b>Registered Users</p>
//             </div>
//           </div>
//         </div>

//         {/* Home How it work section */}
//         <div className="container-fluid text-center py-4">
//           <div className="py-4">
//             <h2 className="h2 text-uppercase">How It Works</h2>
//             <p>Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
//           </div>
//           <div className="container">
//             <div className="row">
//               <div className="col-12 col-lg-4 col-md-4 px-5">
//                 <span className="round-border my-4">
//                   <img alt="Choose A Restaurant" src={Img} />
//                 </span>
//                 <h3 className="h3 mb-4">Choose A Restaurant</h3>
//                 <p className="mb-4">Cras vitae dictum velit. Duis at purus enim. Cras massa massa, maximus sit amet finibus quis, pharetra eu erat.</p>
//               </div>
//               <div className="col-12 col-lg-4 col-md-4 px-5">
//                 <span className="round-border my-4">
//                   <img alt="Choose A Tasty Dish" src={Img} />
//                 </span>
//                 <h3 className="h3 mb-4">Choose A Tasty Dish</h3>
//                 <p className="mb-4">Dictum velit. Duis at purus enim. Cras massa massa, maximus sit amet finibus quis, pharetra eu erat.</p>
//               </div>
//               <div className="col-12 col-lg-4 col-md-4 px-5">
//                 <span className="round-border my-4">
//                   <img alt="Pick Up Or Delivery" src={Img} />
//                 </span>
//                 <h3 className="h3 mb-4">Pick Up Or Delivery</h3>
//                 <p className="mb-4">Purus enim. Cras massa massa, maximus sit amet finibus quis, pharetra eu erat.</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Home Order now section */}
//         <div className="container-fluid text-center py-5 home-cont3">
//           <p className="h1 text-uppercase text-white mt-5 mb-3">Just Order And We Will Deliver You</p>
//           <p className="text-white mb-3">Pellentesque eget justo eget nibh luctus semper at ut tellus.</p>
//           <button type="button" className="btn btn-warning text-uppercase mb-5" onClick={() => this.handleOrderNowBtn()}><b>Order Now</b></button>
//         </div>

//         {/* Home Featured restaurant section */}
//         <div className="container-fluid py-5">
//           <div className="py-4">
//             <h2 className="h2 text-uppercase text-center">Featured Restaurant</h2>
//             <p className="text-center">Cum doctus civibus efficiantur in imperdiet deterruisset.</p>
//           </div>
//           <div className="container">
//             <div className="row">
//               <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
//                 <div className="container res-shadow res-border">
//                   <div className="row p-3">
//                     <div className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
//                       <img style={{ width: "70%" }} alt="Natural Healthy Food" src={Img} />
//                     </div>
//                     <div style={{ position: "relative" }} className="col-lg-8 col-md-8 col-sm-12 py-2">
//                       <h5 className="mb-1">Natural Healthy Food</h5>
//                       <p className="mb-2"><small>Apple Juice, Beef Roast, Cheese Burger</small></p>
//                       <p>
//                         <small className="">
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                         </small>
//                         <small>(1) Review</small>
//                       </p>
//                       <span style={{ position: "absolute", top: 5, right: 5 }}><FontAwesomeIcon icon="heart" className="text-success mr-1" /></span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
//                 <div className="container res-shadow res-border">
//                   <div className="row p-3">
//                     <div className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
//                       <img style={{ width: "70%" }} alt="Menu & Drinks" src={Img} />
//                     </div>
//                     <div style={{ position: "relative" }} className="col-lg-8 col-md-8 col-sm-12 py-2">
//                       <h5 className="mb-1">Menu &amp; Drinks</h5>
//                       <p className="mb-2"><small>Chicken Roast, Chines Soup, Cold Coffee</small></p>
//                       <p>
//                         <small className="">
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                         </small>
//                         <small>(3) Review</small>
//                       </p>
//                       <span style={{ position: "absolute", top: 5, right: 5 }}><FontAwesomeIcon icon="heart" className="text-success mr-1" /></span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
//                 <div className="container res-shadow res-border">
//                   <div className="row p-3">
//                     <div className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
//                       <img style={{ width: "70%" }} alt="Chefs" src={Img} />
//                     </div>
//                     <div style={{ position: "relative" }} className="col-lg-8 col-md-8 col-sm-12 py-2">
//                       <h5 className="mb-1">Chefs</h5>
//                       <p className="mb-2"><small>Egg Fry, Noodles, Pastry</small></p>
//                       <p>
//                         <small className="">
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                         </small>
//                         <small>(1) Review</small>
//                       </p>
//                       <span style={{ position: "absolute", top: 5, right: 5 }}><FontAwesomeIcon icon="heart" className="text-success mr-1" /></span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
//                 <div className="container res-shadow res-border">
//                   <div className="row p-3">
//                     <div className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
//                       <img style={{ width: "70%" }} alt="Menu's" src={Img} />
//                     </div>
//                     <div style={{ position: "relative" }} className="col-lg-8 col-md-8 col-sm-12 py-2">
//                       <h5 className="mb-1">Menu's</h5>
//                       <p className="mb-2"><small>Fish Fry, Fresh Juice, Stakes</small></p>
//                       <p>
//                         <small className="">
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                         </small>
//                         <small>(1) Review</small>
//                       </p>
//                       <span style={{ position: "absolute", top: 5, right: 5 }}><FontAwesomeIcon icon="heart" className="text-success mr-1" /></span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
//                 <div className="container res-shadow res-border">
//                   <div className="row p-3">
//                     <div className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
//                       <img style={{ width: "70%" }} alt="Food N&H" src={Img} />
//                     </div>
//                     <div style={{ position: "relative" }} className="col-lg-8 col-md-8 col-sm-12 py-2">
//                       <h5 className="mb-1">Food N&amp;H</h5>
//                       <p className="mb-2"><small>Beef Roast, Cheese Burger, Doughnut</small></p>
//                       <p>
//                         <small className="">
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                         </small>
//                         <small>(4) Review</small>
//                       </p>
//                       <span style={{ position: "absolute", top: 5, right: 5 }}><FontAwesomeIcon icon="heart" className="text-success mr-1" /></span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="col-lg-6 col-md-6 col-sm-12 mb-4">
//                 <div className="container res-shadow res-border">
//                   <div className="row p-3">
//                     <div className="col-lg-4 col-md-4 col-sm-12 text-center border p-2">
//                       <img style={{ width: "70%" }} alt="Restaurant" src={Img} />
//                     </div>
//                     <div style={{ position: "relative" }} className="col-lg-8 col-md-8 col-sm-12 py-2">
//                       <h5 className="mb-1">Restaurant</h5>
//                       <p className="mb-2"><small>Apple Juice, BB.Q</small></p>
//                       <p>
//                         <small className="">
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                           <FontAwesomeIcon icon="star" className="rating mr-1" />
//                         </small>
//                         <small>(2) Review</small>
//                       </p>
//                       <span style={{ position: "absolute", top: 5, right: 5 }}><FontAwesomeIcon icon="heart" className="text-success mr-1" /></span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Home Footer */}
//         {/* <Footer /> */}
//       </div>
//     );
//   }
// }

// export default Home;