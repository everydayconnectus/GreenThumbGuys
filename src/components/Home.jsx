// ------------------------- I M P O R T E D _ _ D E P E N D E N C I E S _ ------------------------------------


import React, { Component } from 'react'; // Allows for use of components
import { Button, ButtonGroup } from 'reactstrap';
import { Link } from "react-router-dom";
import StockSlider from './StockSlider';



//--------------------------- A P P _ _ C O M P O N E N T _ _ F O R _ _ H O M E  _ _ P A G E--------------------------------




class Home extends Component {
    render() {
        return (
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
                            <Link to="/services"><Button color="primary" className="display-1" id="btnCompany">View Our Services</Button></Link>
                            <Link to="/login"><Button color="success" id="btnClient">Become A Client</Button></Link>
                        </ButtonGroup>
                        {/* Mobile Service Links */}
                        <ButtonGroup vertical id="mobileThumb">
                            <Link to="/services"><Button color="primary" className="display-1" id="btnCompany">View Our Services</Button></Link>
                            <Link to="/login"><Button color="success" id="btnClient">Become A Client</Button></Link>
                        </ButtonGroup>
                    </div>
                </div>

                {/*  Home Carousel Stock Slider */}
                <StockSlider />
            </div>
        );
    };
};


export default Home;