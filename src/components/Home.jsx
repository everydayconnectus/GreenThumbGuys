import React, {Component} from 'react'; // Allows for use of components
import {Link} from "react-router-dom";



// A P P _ _ C O M P O N E N T _ _ F O R _ _ H O M E  _ _ P A G E


class Home extends Component {

    render(){
    return (
        <div className= "home-section" id="home">
            <div className= "home-welcome">
            <h1>Green Thumb Guys</h1>
           
            <p className="display-4">We Provide the Professional Touch for your Residential &amp; Commercial landscaping needs.</p>

            <Link id="btnCompany" className="btn btn-primary" to="/about"><button>Explore Our Company</button></Link>

            <Link id="btnClient" className="btn btn-primary" to="/login"><button>Become A Client!</button></Link>

            </div>
        </div>
    );
    };
};





export default Home;