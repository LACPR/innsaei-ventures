import React, {useState} from 'react'
import { Carousel } from 'react-bootstrap'
import './Header.css'

const ControlledCarousel = () => {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <Carousel.Caption>
          <h4 className="greeting2 greeting">Your new Builder Capital is here!</h4>
            <div className="para1">
              <p>At Innsaei Capital, we are a forward-looking 'builder capital', determined to make a positive impact by funding sustainable and profitable businesses for an inclusive world.</p>
              <p>We focus on value creation-not valuation while investing in tech innovations that are revolutionizing the way we live and connect.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
  
          <Carousel.Caption>
          <h4 className="greeting2 greeting">Your new Builder Capital is here!</h4>
            <div className="para1">
              <p>At Innsaei Capital, we are a forward-looking 'builder capital', determined to make a positive impact by funding sustainable and profitable businesses for an inclusive world.</p>
              <p>We focus on value creation-not valuation while investing in tech innovations that are revolutionizing the way we live and connect.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
  
          <Carousel.Caption>
          <h4 className="greeting2 greeting">Your new Builder Capital is here!</h4>
            <div className="para1">
              <p>At Innsaei Capital, we are a forward-looking 'builder capital', determined to make a positive impact by funding sustainable and profitable businesses for an inclusive world.</p>
              <p>We focus on value creation-not valuation while investing in tech innovations that are revolutionizing the way we live and connect.</p>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }

const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="header-logo d-flex align-items-start justify-content-center">
          <img id="logo" src="images/logo.png" alt="" />
        </div>
        <div className="row hero-box align-items-center justify-content-start">
          <div className="col-7">
            <div className="banner text-left">
              <h1 className="greeting1 greeting">Changing the investment system of today, forging a new path for tomorrow</h1>
            </div>                    
            <div className="features">
              <h4 className="feature1">Transparent Dynamic</h4>
              <h4 className="feature2"> - Profitable Businesses</h4>
              <h4 className="feature3"> - Societal Wellness</h4>                               
            </div>                
          </div>
          <div className="col-2"></div>
          <div className="col-3 text-left">
            <ControlledCarousel />
          </div> 
        </div>
      </div>
    </header>
  )
}

export default Header