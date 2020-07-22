// Dependencies.
import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, Badge } from 'reactstrap';

// Draw Component Class.
class Login extends Component {
  render() {
    return (
      // 'Login' Component Container.
      <div className="login-section">
        {/* Form Post & Container */}
        <Form id="FormContainer" method="POST" action="/api/clients">
          {/* Site Logo & Registration Heading */}
          <Row>
            <Col md={12}>
              <h1 className="display-1" id="login-banner">
                <img width="600" src="/images/logos/logo.png" alt="SiteLogo" />
              </h1>
              <h2 className="display-2 text-center">Register Account</h2>
            </Col>
          </Row>
          {/* First & Land Name */}
          <Row>
            <Col md={6}>
              <FormGroup>
                <Label for="FirstName" className="formLabel">First Name *</Label>
                <Input type="text" className="DataField" name="fName" id="fName" placeholder="Enter Your First Name...." bsSize="lg" required="true" />
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup>
                <Label for="LastName" className="formLabel">Last Name *</Label>
                <Input type="text" className="DataField" name="lName" id="lName" placeholder="Enter your Last Name...." bsSize="lg" required="true" />
              </FormGroup>
            </Col>
          </Row>
          {/*  City, State & Zip*/}
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="City" className="formLabel">City *</Label>
                <Input type="text" className="DataField" name="city" id="city" placeholder="Enter City Here..." bsSize="lg" required="true" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="State" className="formLabel">State *</Label>
                <Input type="text" className="DataField" name="state" id="state" placeholder="Enter State Here..." bsSize="lg" required="true" />
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="Zip" className="formLabel">Zip Code *</Label>
                <Input type="text" className="DataField" name="zip" id="zip" placeholder="Enter Zip Code here...." bsSize="lg" required="true" />
              </FormGroup>
            </Col>
          </Row>

          {/* Email Address */}
          <FormGroup>
            <Label for="Email" className="formLabel">Email Address *</Label>
            <Input type="email" className="DataField" name="email" id="email" placeholder="Enter Full Email Here (ex: johndoe@email.com)" bsSize="lg" required="true" />
          </FormGroup>

          {/* Phone Number */}
          <FormGroup>
            <Label for="phone" className="formLabel">Home/Mobile Phone</Label>
            <Input type="text" className="DataField" name="phone" id="phone" placeholder="Enter Phone Number Here...." bsSize="lg" />
          </FormGroup>

          {/* Password */}
          <FormGroup>
            <Label for="Password" className="formLabel">Password *</Label>
            <Input type="password" className="DataField" name="password" id="password" placeholder="Enter Password Here..." bsSize="lg" required="true" />
          </FormGroup>

          {/* Dropdown Bundles */}
          <FormGroup>
            <Label for="Select" className="formLabel"> Select A Service Bundle *</Label>
            <Input type="select" className="DataField" name="select" id="bundleSelect" bsSize="lg">
              <option className="DataField">Choose A Service Bundle</option>
              <option className="DataField">Basic Service Bundle (Full Year)</option>
              <option className="DataField">Basic Service Bundle (Seasonal)</option>
              <option className="DataField">Green Thumb Bundle (Full Year)</option>
              <option className="DataField">Green Thumb BundleI (Seasonal)</option>
              <option className="DataField">Premium Bundle (Full Year)</option>
              <option className="DataField">Premium Bundle (Seasonal)</option>
              <option className="DataField">Commercial Bundle</option>
            </Input>
          </FormGroup>

          {/* Hidden Upload Form; May be used on the client dashboard */}
          {/* <FormGroup>
            <Label for="Upload" className="btn btn-success">Upload Picture</Label>
            <Input type="file" className="DataField" name="file" id="Upload" bsSize="lg" /> <span id="UploadData"></span>

            <FormText color="white" className="formText">
              Upload a Picture of your Home and be sure that it includes the front lawn
           </FormText>
          </FormGroup> */}

          {/* Create Account Button (POST) */}
          <Button color="success" className="hvr-grow" type="submit" id="btnSubmit">Create Account</Button>
          <Row className="text-center">
            <Col className="mb-3" md={12}>
              <p className="display-2">Already A Client?</p>
              <hr className="content-seperator" />
            </Col>
          </Row>
          <Row className="text-center mt-4">
            <Col md={6}>
              <a className="display-3 text-success" href="#">Login Now</a>
            </Col>
            <Col md={6}>
              <a className="display-3 text-success" href="#">Reset Password</a>
            </Col>
          </Row>
        </Form>
      </div>
    );
  };
};

// Export Component.
export default Login;