// Dependencies.
import React, { Component } from 'react';
import { Col, Row, Input, FormGroup, Label, ButtonGroup, Button } from 'reactstrap';
import { Link } from "react-router-dom";
import axios from "axios";

// JSX Props.
import DashSideBar from './DashSideBar';

// Draw Component Class.
class Feedback extends Component {
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
        {/* Client User Feedback Container */}
        <div className="container-fluid client-dashboard">
          {/* Client User Feedback Row */}
          <div className="row">
            {/* Sidebar Prop Tag */}
            <DashSideBar />
            {/* Account Details Container */}
            <div className="container">
              {/* Account Details Col */}
              <div className="col-lg text-center p-0 m-0">
                {/* Account Details Form Container */}
                <div className="ContentBox-warning">
                  {/* Sender Feedback Header Text */}
                  <h1 className="display-1">- Send Feedback - </h1>
                  {/* Content Seperator */}
                  <hr className="hr-warning" />
                  {/* Send Feedback Containing Row */}
                  <Row className="mt-5">
                    {/* Col 1 - Sender Name */}
                    <Col md={4}>
                      <Label className="font-weight-bold"><h3>Sender</h3></Label>
                      <Input type="text" className="DataField font-weight-bold text-center bg-success" name="firstName" id="firstName" value={client.firstName + ' ' + client.lastName} placeholder={client.firstName} bsSize="lg" required={true} />
                    </Col>
                    {/* Col 2 - Sender Message */}
                    <Col md={12}>
                      <FormGroup>
                      <Label className="font-weight-bold"><h3>Write Feedback Here</h3></Label>
                        <Input type="textarea" className="bg-success border-0 h-50" placeholder={client.firstName + ", " + "tell us how we are doing or request a specific need for your service."} name="FeedbackBox" id="FeedbackBox" />
                      </FormGroup>
                    </Col>
                    {/* Update Info Button / Text */}
                    <Row className="pt-3">
                      <Col md={6}>
                        <ButtonGroup>
                          <Link to="/client"><Button color="success" className="hvr-grow" id="btnCompany">Send Feedback</Button></Link>
                        </ButtonGroup>
                      </Col>
                      <Col className="mt-3" md={6}>
                        <p className="lead">
                          This message will be sent to our team through email. We will use the email you provided us at sign up to forward this message. You can change your email if needed by going to 'My Account' and editing the existing email on your account.
                       </p>
                      </Col>
                    </Row>
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
export default Feedback;