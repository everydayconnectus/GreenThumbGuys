import React, { Component } from 'react'; // Allows for use of components
import { Link } from "react-router-dom";
import { Button, ButtonDropdown, ButtonGroup, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// A P P _ _ C O M P O N E N T _ _ F O R _ _ H O M E  _ _ P A G E


class Home extends Component {

    render() {
        return (
            <div className="home-section" id="home">
                <div className="home-welcome">
                    <h1 id="ThumbTitle">Green Thumb Guys</h1>

                    <p id="ThumbContext" className="display-4">We Provide the Professional Touch for your Residential &amp; Commercial landscaping needs.</p>
                    <div className = "buttonDiv">
                    <ButtonGroup id= "desktopThumb">
                        <Link to="/about"><Button color="primary" className="display-1" id="btnCompany">Explore Our Company</Button></Link>
                        <Link to="/login"><Button  color ="warning" id="btnClient">Become A Client!</Button></Link>
                    </ButtonGroup>
                    
                    <ButtonGroup vertical id="mobileThumb">
                        <Link to="/about"><Button color="primary" id="btnCompany">Explore Our Company</Button></Link>
                        <Link to="/login"><Button  color ="warning" id="btnClient">Become A Client!</Button></Link>
                    </ButtonGroup>
                    </div>
                </div>
            </div>
        );
    };
};


export default Home;