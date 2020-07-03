// Dependencies.
import React, { Component } from 'react'; // Allows for use of components
import { Button, ButtonGroup } from 'reactstrap';
import { Link } from "react-router-dom";

// A P P _ _ C O M P O N E N T _ _ F O R _ _ H O M E  _ _ P A G E

class Home extends Component {
    render() {
        return (
            <div className="home-section" id="home">
                <div id="LawnImageSlides" className="carousel slide carousel-fade" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-caption">
                            <h1 id="ThumbTitle">Professional Landscaping</h1>
                            <p id="ThumbContext" className="display-4 mb-5">We provide professional residential &amp; commercial landscaping services.</p>
                            <div className="ServiceLinks">
                                <ButtonGroup id="desktopThumb">
                                    <Link to="/about"><Button color="primary" className="display-1" id="btnCompany">View Our Services</Button></Link>
                                    <Link to="/login"><Button color="success" id="btnClient">Become A Client</Button></Link>
                                </ButtonGroup>

                                <ButtonGroup vertical id="mobileThumb">
                                    <Link to="/about"><Button color="primary" className="display-1" id="btnCompany">View Our Services</Button></Link>
                                    <Link to="/login"><Button color="success" id="btnClient">Become A Client</Button></Link>
                                </ButtonGroup>
                            </div>
                        </div>
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="./images/backgrounds/lawn.jpg" alt="lawn.jpg" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="lawn.jpg" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://images.pexels.com/photos/321542/pexels-photo-321542.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="lawn.jpg" />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};


export default Home;