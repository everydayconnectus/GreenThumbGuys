// Dependencies.
import React, { useState } from 'react'; // Allows for use of components
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import axios from "axios";

// Define Default Form Fields Object.
const initialFormData = Object.freeze({
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  address: "",
  city: "",
  state: "",
  zipcode: "",
  bundle: ""
});

// Listen to Form Inputs For Data.
const Register = () => {
  const [formData, updateFormData] = useState(initialFormData);

  // Handle Data Coming in and Clean It Up.
  const handleChange = (e) => {
    updateFormData({
      ...formData,
      // Trim off Potential Whitepace From Fields.
      [e.target.name]: e.target.value.trim()
    });
  };

  // Handle Behavior When A User Submits Using the 'Submit' Button.
  const handleSubmit = (e) => {
    // Revent Reload Behavior.
    e.preventDefault()
    // POST to the Clients API Route Using Axios.
    axios
      .post("/api/clients", formData)
      // If Success...
      .then(res => {
        alert("User registration successful!", res.status);
      })
      // If Failure..
      .catch(error => {
        alert(error);
      });
  };

  // Draw Component Class.
  return (
    // 'Register' Component Container.
    <div className="register-section">
      {/* Form Post & Container */}
      <Form id="FormContainer" method="POST" action="/api/clients">
        {/* Site Logo & Registration Heading */}
        <Row>
          <Col md={12}>
            <h1 className="display-1" id="register-banner">
              <img id="SiteLogoregister" width="600" src="/images/logos/logo.png" alt="SiteLogo" />
            </h1>
            <h2 className="display-2 text-center">Register Account</h2>
          </Col>
        </Row>
        {/* First & Land Name */}
        <Row>
          <Col md={6}>
            <FormGroup className="FormGroup">
              <Label for="FirstName" className="formLabel">First Name *</Label>
              <Input type="text" className="DataField" name="firstName" id="firstName" placeholder="Enter Your First Name...." bsSize="lg" required={true} onChange={handleChange} />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup className="FormGroup">
              <Label for="LastName" className="formLabel">Last Name *</Label>
              <Input type="text" className="DataField" name="lastName" id="lastName" placeholder="Enter your Last Name...." bsSize="lg" required={true} onChange={handleChange} />
            </FormGroup>
          </Col>
        </Row>
        {/* Address Field */}
        <Row form>
          <Col md={12}>
            <FormGroup>
              <Label for="Address" className="formLabel">Address *</Label>
              <Input type="text" className="DataField" name="address" id="address" placeholder="Enter Your Street Address Here..." bsSize="lg" required={true} onChange={handleChange} />
            </FormGroup>
          </Col>
        </Row>
        {/*  City, State & Zip*/}
        <Row form>
          <Col md={6}>
            <FormGroup>
              <Label for="City" className="formLabel">City *</Label>
              <Input type="text" className="DataField" name="city" id="city" placeholder="Enter City Here..." bsSize="lg" required={true} onChange={handleChange} />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="State" className="formLabel">State *</Label>
              <Input type="text" className="DataField" name="state" id="state" placeholder="Enter State Here..." bsSize="lg" required={true} onChange={handleChange} />
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup>
              <Label for="Zip" className="formLabel">Zip Code *</Label>
              <Input type="text" className="DataField" name="zipcode" id="zipcode" placeholder="Enter Zip Code here...." bsSize="lg" required={true} onChange={handleChange} />
            </FormGroup>
          </Col>
        </Row>

        {/* Email Address */}
        <FormGroup>
          <Label for="Email" className="formLabel">Email Address *</Label>
          <Input type="email" className="DataField" name="email" id="email" placeholder="Ex: johndoe@email.com" bsSize="lg" required={true} onChange={handleChange} />
        </FormGroup>

        {/* Phone Number */}
        <FormGroup>
          <Label for="phone" className="formLabel">Home/Mobile Phone</Label>
          <Input type="text" className="DataField" name="phone" id="phone" placeholder="Enter Phone Number Here...." bsSize="lg" required={false} onChange={handleChange} />
        </FormGroup>

        {/* Password */}
        <FormGroup>
          <Label for="Password" className="formLabel">Password *</Label>
          <Input type="password" className="DataField" name="password" id="password" placeholder="Enter Password Here..." bsSize="lg" required={true} onChange={handleChange} />
        </FormGroup>

        {/* Dropdown Bundles */}
        <FormGroup>
          <Label for="Select" className="formLabel"> Select A Service Bundle *</Label>
          <Input type="select" className="DataField" name="bundle" id="bundle" bsSize="lg" required={true} onChange={handleChange}>
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

        {/* Create Account Button (POST) */}
        <Button color="success" className="hvr-grow" type="submit" id="btnSubmit" onClick={handleSubmit}>Create Account</Button>

        {/* 'register Now | Reset Password' Container */}
        <Row className="text-center">
          {/* Heading Text */}
          <Col className="mb-3" md={12}>
            <p id="AlreadyClient" className="display-2">Already A Client?</p>
            {/* Content Seperator */}
            <hr className="content-seperator" />
          </Col>
        </Row>
        {/* register/Reset Password Container */}
        <Row className="text-center mt-4">
          {/* register Text */}
          <Col md={12}>
            <Link id="registerNow" className="display-3 text-success" href="#" to="/login">Login Now</Link>
          </Col>
        </Row>
      </Form>
    </div>
  );

};

// Export Component.
export default Register;