// React Dependencies.
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Badge, Col, Row, NavItem, NavLink, Nav, Alert, Container, Jumbotron, Progress, Button, Table, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";
import { data } from "jquery";

class Client extends Component {
  state = {
    client: {}
  }

  // ----- Calling ----- //
  componentDidMount() {
    //  let ID = prompt("Enter the user profile you'd like to authenticate.")
    //  this.getClient(ID);
    this.getClient("5f380b1de5e1ec4a747c6b20");
  }

  getClient = (id) => {
    axios.get(`/api/clients/${id}`)
      .then((response) => {
        const data = response.data;
        this.setState({ client: data });
        console.log(this.props.match.params.id);
        console.log(data);
        document.getElementById("ClientName").innerHTML = data.firstName + "'s Profile";
      })
      .catch((error) => {
        console.log("There is an error, Sorry");
      });
  };

  render() {
    const { client } = this.state;

    return (
      <>
        <div className="container-fluid client-dashboard ">
          <div className="row">
            <nav className="sidebar bg-dark text-center">
              {/* Sidebar Profile Container */}
              <div id="ProfileContainer">
                {/* Sidebar Profile Pic */}
                <img id="ProfilePic" src={client.pic} alt={client.pic} />
                {/* Sidebar Dash Details Container */}
                <div id="DashDetailsContainer">
                  {/* Client Profile - FullName Display */}
                  <h1 className="text-success" id="ClientDashName">
                    {client.firstName + " " + client.lastName}
                  </h1>
                  {/* Bundle Info */}
                  <Badge className="Badge mb-2" color="success">{client.bundle}</Badge>
                  {/* Profile / Nav Route Seperator */}
                  <hr />
                  {/* Dashbard Navigation */}
                  <Nav className="text-white p-0 m-0" vertical>
                    {/* My Account Route Link */}
                    <NavItem>
                      <NavLink className="hvr-shrink text-white" href="#"><i class="fa fa-user" aria-hidden="true"></i> My Account</NavLink>
                    </NavItem>
                    {/* Feedback Route Link */}
                    <NavItem>
                      <NavLink className="hvr-shrink text-white" href="#"><i class="fa fa-pencil" aria-hidden="true"></i> Send Feedback</NavLink>
                    </NavItem>
                  </Nav>
                </div>
              </div>
            </nav>
            {/* Service Tracker Container */}
            <div className="container mt-5">
              {/* Service Tracker Col */}
              <div className="col-lg text-center p-0 m-0">
                {/* Service Tracker Form Container */}
                <div className="ContentBox">
                  <h1 className="display-1">- Account Details - </h1>
                  {/* Content Seperator */}
                  <hr />
                  {/* First Name */}
                  <Row className="mt-5">
                    <Col md={6}>
                      <h1>First Name:</h1>
                    </Col>
                    <Col md={6}>
                      <Input type="text" className="DataField font-weight-bold text-center" name="firstName" id="firstName" placeholder={client.firstName} bsSize="lg" required={true} />
                      <Progress bar color="success" value="20" />
                    </Col>
                  </Row>
                  {/* Last Name */}
                  <Row className="mt-5">
                    <Col md={6}>
                      <h1>Last Name:</h1>
                    </Col>
                    <Col md={6}>
                      <Input type="text" className="DataField font-weight-bold text-center" name="firstName" id="firstName" value={client.lastName} bsSize="lg" required={true} />
                    </Col>
                  </Row>
                  {/* Email Address */}
                  <Row className="mt-5">
                    <Col md={6}>
                      <h1>Email Address:</h1>
                    </Col>
                    <Col md={6}>
                      <Input type="text" className="DataField font-weight-bold text-center" name="firstName" id="firstName" value={client.email} bsSize="lg" required={true} />
                    </Col>
                  </Row>
                  {/* Street Address */}
                  <Row className="mt-5">
                    <Col md={6}>
                      <h1>Street Address:</h1>
                    </Col>
                    <Col md={6}>
                      <Input type="text" className="DataField font-weight-bold text-center" name="firstName" id="firstName" value={client.address + " " + client.city + ", " + client.state + " " + client.zipcode} bsSize="lg" required={true} />
                    </Col>
                  </Row>
                  {/* Subscription */}
                  <Row className="mt-5">
                    <Col md={6}>
                      <h1>Subscription:</h1>
                    </Col>
                    <Col md={6}>
                      <Input type="text" className="DataField font-weight-bold text-center" name="firstName" id="firstName" value={client.bundle} bsSize="lg" required={true} />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

// Export Component.
export default Client;