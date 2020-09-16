// Dependencies.
import React from 'react';
import {
    Jumbotron, Container,
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button,
    CardGroup, Badge, CardDeck
} from 'reactstrap';

const Services = props => {
    return (
        <div className="services-section" id="services">
            <Jumbotron className="JumboHeading" fluid>
                <Container fluid>
                    <h1 className="ServicesHeading display-3">About Us</h1>
                </Container>
            </Jumbotron>
            <div className="container text-center">
                <h2 className="display-1 font-weight-bold text-success">Our Services</h2>
                <p className="display-4 lead text-primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae metus non neque consequat volutpat. In nec ipsum tempus, fermentum neque non, placerat metus. Aliquam iaculis ultrices nisl. Duis urna diam, finibus ut leo a, gravida euismod lectus.
                </p>
            </div>
            <div className="container text-center">
                <h2 className="display-1 font-weight-bold text-success">Service Bundles</h2>
                <p className="display-4 lead text-primary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div className="container">
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

// Export Component.
export default Services;