// React Dependencies.
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Progress, Button, Input, ButtonGroup } from 'reactstrap';
import axios from "axios";

class AccDetails extends Component {
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
        {/* Account Details Container */}
        <div className="container mt-5">
          {/* Account Details Col */}
          <div className="col-lg text-center p-0 m-0">
            {/* Account Details Form Container */}
            <div className="ContentBox-success">
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
                </Col>
              </Row>
              {/* Last Name */}
              <Row className="mt-5">
                <Col md={6}>
                  <h1>Last Name:</h1>
                </Col>
                <Col md={6}>
                  <Input type="text" className="DataField font-weight-bold text-center" name="lastName" id="lastName" placeholder={client.lastName} bsSize="lg" required={true} />
                </Col>
              </Row>
              {/* Email Address */}
              <Row className="mt-5">
                <Col md={6}>
                  <h1>Email Address:</h1>
                </Col>
                <Col md={6}>
                  <Input type="text" className="DataField font-weight-bold text-center" name="email" id="email" placeholder={client.email} bsSize="lg" required={true} />
                </Col>
              </Row>
              {/* Phone Number */}
              <Row className="mt-5">
                <Col md={6}>
                  <h1>Phone Number:</h1>
                </Col>
                <Col md={6}>
                  <Input type="text" className="DataField font-weight-bold text-center" name="bundle" id="bundle" placeholder={client.bundle} bsSize="lg" required={true} />
                </Col>
              </Row>
              {/* Street Address */}
              <Row className="mt-5">
                <Col md={6}>
                  <h1>Street Address:</h1>
                </Col>
                <Col md={6}>
                  <Input type="text" className="DataField font-weight-bold text-center" name="address" id="address" placeholder={client.address + " " + client.city + ", " + client.state + " " + client.zipcode} bsSize="lg" required={true} />
                </Col>
              </Row>
              {/* Subscription */}
              <Row className="mt-5">
                <Col md={6}>
                  <h1>Bundle Subscription:</h1>
                </Col>
                <Col md={6}>
                  <Input type="text" className="DataField font-weight-bold text-center" name="bundle" id="bundle" placeholder={client.bundle} bsSize="lg" required={true} />
                </Col>
              </Row>
              {/* Update Info Button / Text */}
              <Row className="mt-5 pt-3">
                <Col md={6}>
                  <ButtonGroup>
                    <Link to="/client"><Button color="success" className="hvr-grow" id="btnCompany">Update Info</Button></Link>
                  </ButtonGroup>
                </Col>
                <Col className="mt-3" md={6}>
                  <p className="lead">
                    These are your basic account details that makeup your client profile. If for any reason you need to make changes to your account, simply edit the fields above and click on the 'Update Info' button below when you are ready to save it.
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </>
    )
  }
}

// Export Component.
export default AccDetails;