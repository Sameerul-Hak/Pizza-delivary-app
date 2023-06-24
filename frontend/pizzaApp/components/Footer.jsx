import React from 'react';
import './footer.css'

function Footer() {
  return (
    <section className="footerbody">
    <footer className="footer">
      <div className="footerbox">
        <h2>Links</h2>
        <ul class="footerlinks">
          <li><a href="/">Home</a></li>
          <li><a href="#aboutus">About Us</a></li>
          <li><a href="#contactus">Contact Us</a></li>
          </ul>
          </div>
        <div className="footerbox">
          <h2>News Letter</h2>
          <form action="" className='footerregistration'>
            <input type="email" name='email' id='email' placeholder='Enter your email ID'/>
            <button id='footerbutton' type='submit'>Subscibe Now</button>
          </form>
        </div>
        <div className="footerbox">
          <h2>Contact</h2>
          <p className="footeraddress">123, xyz Road, ABC 20 <br />
          Chennai, Tamil Nadu, India</p>
          <ul className="footersocial">
            <li><i className="fa-brands fa-facebook"></i></li>
            <li><i className="fa-brands fa-instagram"></i></li>
            <li><i className="fa-brands fa-twitter"></i></li>
          </ul>
          </div>
    </footer>
    </section>
);
}

    

export default Footer;
