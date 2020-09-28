import React from 'react'
import './Footer.css'

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <div className="row align-items-center justify-content-start">
        <div className="col-2">
          <div id="item1">
            <img src="/innsaei-ventures/images/logo2.png" alt="" />
          </div>
          <div id="item2">
            <h5 className="touch">Get in touch</h5>
            <p className="hello">hello@innsaei.capital</p>
          </div>
        </div>
        <div className="col-10">
          <div className="support-section">
          <div className="support-wrapper">
            <div className="about-innsaei">
              <h4 className="footer-heading">About Innsaei</h4>
              <p>About Us</p>
              <p>Principles</p>
              <p>Our Model</p>
            </div>
            <div className="investment">
              <h4 className="footer-heading">Investment Philosophy</h4>
              <p>Our Sectors</p>
              <p>Alignment with UNSDG</p>
            </div>
            <div className="startups">
              <h4 className="footer-heading">Startups</h4>
              <p>Overview</p>
              <p>How we work</p>
              <p>Apply with us</p>
              <p>Startup Categories</p>
            </div>
            <div className="insiders">
              <h4 className="footer-heading">Insiders</h4>
              <p>Overview</p>
              <p>How we work</p>
            </div>
            <div className="askria">
              <h4 className="footer-heading">AskRia</h4>
            </div> 
            <div className="askria">
              <h4 className="footer-heading">Insights</h4>
            </div>
            <div>
            </div>
            <div className="icons">
              <ul>
                <li><img className="instagram" src="/innsaei-ventures/images/instagram.png" alt="" /></li>
                <li><img className="twitter" src="/innsaei-ventures/images/twitter.png" alt="" /></li>
                <li><img className="linkedin" src="/innsaei-ventures/images/linkedin.png" alt="" /></li>
              </ul>
            </div>           
          </div>
        </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer