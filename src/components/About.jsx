import React, { Component } from 'react'; // Allows for use of components



// A P P _ _ C O M P O N E N T _ _ F O R _ _ A B O U T _ _ P A G E


class About extends Component {

    render() {
        return (
            <div className="about-section" id="about">
                <h1 class="display-4" id="aboutTitle">About Us</h1>
                {/* Jumbo 'About Us' */}
                <div class="jumbotron jumbotron-fluid">
                    <div class="container jumbo"></div>
                </div>
                <div className="container-fluid text-center" id="AboutContent">
                    <h1>
                        <h2 className="text-success" id="AboutBrand">
                            Excepteur commodo cupidatat
                        </h2>
                        <p id="AboutContext" className="text-primary lead">
                            Sunt veniam amet magna commodo. Aliquip excepteur cillum esse exercitation in nulla ut. Tempor Lorem quis ex amet deserunt enim duis minim sunt minim. Ut esse eu id magna id nisi exercitation fugiat qui esse ullamco. Commodo mollit ipsum id deserunt in ex fugiat quis proident.  Sunt veniam amet magna commodo. Aliquip excepteur cillum esse exercitation in nulla ut. Tempor Lorem quis ex amet deserunt enim duis minim sunt minim. Ut esse eu id magna id nisi exercitation fugiat qui esse ullamco. Commodo mollit ipsum id deserunt in ex fugiat quis proident. 
                        </p>
                    </h1>
                </div>
            </div>
        );
    };
};





export default About;