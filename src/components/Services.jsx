// Dependencies.
import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody, Badge } from 'reactstrap';

// Draw Component Class.
class Services extends Component {
  render() {
    return (
      <div className="services-section" id="services">
        <div className="service-info">
          <h1 id="OurServices">Service Packages We Offer</h1>

          <h2>Residential Packages: <Badge color="primary">6-month</Badge> and <Badge color="success">9-month</Badge> options </h2>
          <h2>Commercial Package contracts are <Badge color="info">12-months</Badge> long</h2>
          <h2>Choose from one of our plans below:</h2>

        </div>
        <div className="service-cards">
          <CardDeck>
            <Card id="card">
              <CardImg top width="100%" src="https://images.unsplash.com/photo-1458245201577-fc8a130b8829?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1355&q=80" alt="Card image cap" />
              <CardBody className="cardtitle">
                <CardTitle><h1>Standard Package</h1></CardTitle>
                <CardSubtitle><h2><Badge color="primary">$65/ month</Badge><Badge color="success">$90/ month</Badge></h2></CardSubtitle>
                <CardText><section className="card-info"><ul>
                  <li>Monthly Lawn Maintenance</li>
                  <li>Fertilization Package</li>
                  <li>Fall &amp; Spring Cleaning</li>

                </ul></section>
                </CardText>

              </CardBody>
            </Card>
            <Card id="card">
              <CardImg top width="100%" src="https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Card image cap" />
              <CardBody className="cardtitle">
                <CardTitle ><h1>Emerald Package</h1></CardTitle>
                <CardSubtitle><h2><Badge color="primary">$115/ month</Badge><Badge color="success">$150/ month</Badge></h2></CardSubtitle>
                <CardText> <section className="card-info"><ul>
                  <li>Bi-Weekly Lawn Maintenance</li>
                  <li>Fertilization Package</li>
                  <li>Weed Control</li>
                  <li>Spring &amp; Fall Cleaning</li>
                  <li>Mosquito &amp; Pest Control</li>

                </ul></section></CardText>

              </CardBody>
            </Card>
            <Card id="card">
              <CardImg top width="100%" src="https://images.unsplash.com/photo-1556955112-28cde3817b0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Card image cap" />
              <CardBody className="cardtitle">
                <CardTitle><h1>Premium Package</h1></CardTitle>
                <CardSubtitle><h2><Badge color="primary">$200/ month</Badge><Badge color="success">$225/ month</Badge></h2></CardSubtitle>
                <CardText><section className="card-info"><ul>
                  <li>Weekly Lawn Maintenance</li>
                  <li>Fertilization Package</li>
                  <li>Weed Control</li>
                  <li>Mosquito &amp; Pest Control</li>
                  <li>Spring &amp; Fall Cleaning</li>
                  <li>Aeration &amp; PH Balancing</li>
                </ul></section></CardText>

              </CardBody>
            </Card>
            <Card id="card">
              <CardImg top width="100%" src="https://images.unsplash.com/photo-1588055886992-61b2dcba1901?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Card image cap" />
              <CardBody className="cardtitle">
                <CardTitle><h1>Commercial Package</h1></CardTitle>
                <CardSubtitle><h2><Badge color="info">Starts at $350/month</Badge></h2></CardSubtitle>
                <CardText><section className="card-info"><ul>
                  <li>Weekly Lawn Maintenance</li>
                  <li>Fertilization Package</li>
                  <li>Spring &amp; Fall Cleaning</li>
                  <li>Seasonal Plant &amp; Lawn Installations</li>
                  <li>Mulch &amp; Soil Applications</li>
                  <li>Landscape Lighting &amp; Sprinkler System</li>
                  <li>Snow Removal(De-icing)</li>
                  <li>Sidewalk &amp; Parking lot Maintenance</li>
                </ul></section></CardText>

              </CardBody>
            </Card>
          </CardDeck>
        </div>
      </div>
    );
  };
};

// Export Component.
export default Services;