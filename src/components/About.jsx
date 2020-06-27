import React, { Component } from 'react'; // Allows for use of components



// A P P _ _ C O M P O N E N T _ _ F O R _ _ A B O U T _ _ P A G E


class About extends Component {

    render() {
        return (
            <div className="about-section" id="about">
                {/* Jumbo 'About Us' */}
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        {/* Jumbo 'About Us' content */}
                        <h1 class="display-4">Fluid jumbotron</h1>
                        <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    </div>
                </div>
            </div>
        );
    };
};





export default About;