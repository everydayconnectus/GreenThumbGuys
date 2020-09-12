import React from 'react';
import { ButtonGroup, Button } from 'reactstrap';
import { Link } from "react-router-dom";

const Home = () => (
    <div id="Home">
        <div id="HomeBrand" className="container">
            <h1 id="BrandHeading" className="display-1">Professional Landscaping</h1>
            <p id="BrandContext" className="display-5">We provide professional residential & commercial landscaping services.</p>
            <ButtonGroup id="desktopThumb">
                <Link to="/services"><Button color="primary" className="btnServices hvr-grow mr-4">View Our Services</Button></Link>
                <Link to="/register"><Button color="success" className="btnClient hvr-grow">Become A Client</Button></Link>
            </ButtonGroup>
        </div>
    </div>
)

export default Home;