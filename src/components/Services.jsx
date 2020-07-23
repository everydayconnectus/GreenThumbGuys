// Dependencies.
import React, { Component } from 'react';

// ReactStrap Definitions.
import { Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody, Badge } from 'reactstrap';

// Draw Component Class.
class About extends Component {
    render() {
        return (
            // 'About Us' Component Container.
            <div className="services-section" id="services">
                {/* 'About Us' Component Brand */}
                <h1 className="display-4" id="aboutTitle">About Us</h1>

                {/* Jumbo 'About Us' Image */}
                <div className="jumbotron jumbotron-fluid">
                    <div className="container jumbo"></div>
                </div>

                {/* 'About Us' Context Container */}
                <div className="container-fluid text-center" id="ServicesContent">
                    {/* 'Our Services' Title */}
                    <h2 className="display-1 mt-5 text-success font-weight-bold">
                        Our Services
                    </h2>
                    {/* 'Our Services' Statement */}
                    <p id="ServiceContext" className="text-primary lead">
                        We are the <b className="text-success">Green Thumb Guys</b>! We specialize in providing our clients with a premium quality landscaping experience to both local and residential customers. Whether you need monthly low-maintinance support or weekly high-end care, our guys have you covered! You can choose from any of our four service bundles below to get started.
                    </p>
                    {/* 'Our Services' Bundle Title */}
                    <h2 className="display-2 mt-5 text-success">
                        ~ Premium Service Bundles ~
                    </h2>
                    {/* 'Our Services' Bundle Statement */}
                    <h3 className="text-info">Click on any of the four desired services below to get started!</h3>

                    {/* Service Bundle Container */}
                    <CardDeck className="ServiceCards w-50 mt-5 text-dark">
                        {/* Standard Package Bundle Card */}
                        <Card className="shadow-lg hvr-grow" id="StandardBundle">
                            <CardImg top width="100%" src="https://images.unsplash.com/photo-1458245201577-fc8a130b8829?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80" alt="Card image cap" />
                            <CardBody className="cardtitle">
                                <CardTitle><h1>Basic Service Bundle</h1></CardTitle>
                                <CardSubtitle><h2><Badge color="primary">$65/ month</Badge><Badge color="success">$90/ month</Badge></h2></CardSubtitle>
                                <CardText>
                                    <section className="card-info">
                                        <ul>
                                            <li>Monthly Lawn Maintenance</li>
                                            <li>Fertilization Package</li>
                                            <li>Fall &amp; Spring Cleaning</li>
                                        </ul>
                                    </section>
                                </CardText>
                            </CardBody>
                        </Card>
                        {/* Emerald Package Bundle Card */}
                        <Card className="shadow-lg  hvr-grow" id="EmeraldBundle">
                            <CardImg top width="100%" src="https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
                            <CardBody className="cardtitle">
                                <CardTitle ><h1>'Green Thumb' Bundle</h1></CardTitle>
                                <CardSubtitle><h2><Badge color="primary">$115/ month</Badge><Badge color="success">$150/ month</Badge></h2></CardSubtitle>
                                <CardText>
                                    <section className="card-info">
                                        <ul>
                                            <li>Bi-Weekly Lawn Maintenance</li>
                                            <li>Fertilization Package</li>
                                            <li>Weed Control</li>
                                            <li>Spring &amp; Fall Cleaning</li>
                                            <li>Mosquito &amp; Pest Control</li>
                                        </ul>
                                    </section>
                                </CardText>
                            </CardBody>
                        </Card>
                        {/* Premium Package Bundle Card */}
                        <Card className="shadow-lg  hvr-grow" id="PremiumBundle">
                            <CardImg top width="100%" src="https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Card image cap" />
                            <CardBody className="cardtitle">
                                <CardTitle><h1>Premium Bundle</h1></CardTitle>
                                <CardSubtitle><h2><Badge color="primary">$200/ month</Badge><Badge color="success">$225/ month</Badge></h2></CardSubtitle>
                                <CardText>
                                    <section className="card-info">
                                        <ul>
                                            <li>Weekly Lawn Maintenance</li>
                                            <li>Fertilization Package</li>
                                            <li>Weed Control</li>
                                            <li>Mosquito &amp; Pest Control</li>
                                            <li>Spring &amp; Fall Cleaning</li>
                                            <li>Aeration &amp; PH Balancing</li>
                                        </ul>
                                    </section>
                                </CardText>
                            </CardBody>
                        </Card>
                        {/* Commercial Package Bundle Card */}
                        <Card className="shadow-lg  hvr-grow" id="CommercialBundle">
                            <CardImg top width="100%" src="https://images.unsplash.com/photo-1588055886992-61b2dcba1901?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Card image cap" />
                            <CardBody className="cardtitle">
                                <CardTitle><h1>Commercial Bundle</h1></CardTitle>
                                <CardSubtitle><h2><Badge color="info">Starts at $350/month</Badge></h2></CardSubtitle>
                                <CardText>
                                    <section className="card-info">
                                        <ul>
                                            <li>Weekly Lawn Maintenance</li>
                                            <li>Fertilization Package</li>
                                            <li>Spring &amp; Fall Cleaning</li>
                                            <li>Seasonal Plant &amp; Lawn Installations</li>
                                            <li>Mulch &amp; Soil Applications</li>
                                            <li>Landscape Lighting &amp; Sprinkler System</li>
                                            <li>Snow Removal(De-icing)</li>
                                            <li>Sidewalk &amp; Parking lot Maintenance</li>
                                        </ul>
                                    </section>
                                </CardText>
                            </CardBody>
                        </Card>
                    </CardDeck>
                </div>
            </div>
        );
    };
};

// Export Component.
export default About;