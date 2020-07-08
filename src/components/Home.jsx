// Dependencies.
import React, { Component } from 'react';

// React Strap Definitions.
import { Button, ButtonGroup } from 'reactstrap';
import { Link } from "react-router-dom";
import StockSlider from './StockSlider';

// Draw Component Class.
class Home extends Component {
    render() {
        return (
            // 'Home Page' Container.
            <div className="home-section" id="home">
                {/* Home Page Context */}
                <div className="carousel-caption">
                    {/* Home Page Brand */}
                    <h1 id="ThumbTitle">Professional Landscaping</h1>
                    {/* Professional Description */}
                    <p id="ThumbContext" className="display-4 mb-5">We provide professional residential &amp; commercial landscaping services.</p>
                    {/* Service Link Buttons (Desktop/Mobile) */}
                    <div className="ServiceLinks">
                        {/* Desktop Service Links  */}
                        <ButtonGroup id="desktopThumb">
                            <Link to="/services"><Button color="primary" className="hvr-grow display-1" id="btnCompany">View Our Services</Button></Link>
                            <Link to="/login"><Button color="success" className="hvr-grow" id="btnClient">Become A Client</Button></Link>
                        </ButtonGroup>
                        {/* Mobile Service Links */}
                        <ButtonGroup vertical id="mobileThumb">
                            <Link to="/services"><Button color="primary" className="hvr-grow display-1" id="btnCompany">View Our Services</Button></Link>
                            <Link to="/login"><Button color="success" className="hvr-grow" id="btnClient">Become A Client</Button></Link>
                        </ButtonGroup>
                    </div>
                </div>
                {/*  Home Carousel Stock Slider */}
                <StockSlider />
            </div>
        );
    };
};

// Export Component.
export default Home;