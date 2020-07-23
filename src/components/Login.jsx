// Dependencies.
import React, { useState } from 'react'; // Allows for use of components
import { Col, Row, Button, Form, FormGroup, Label, Input, Badge } from 'reactstrap';
import axios from "axios";


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





const Login = () => {

  const [formData, updateFormData] = useState(initialFormData);

  const handleChange = (e) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [e.target.name]: e.target.value.trim()
    });
};


const handleSubmit = (e) => {
  e.preventDefault()
  console.log(formData);
  // ... submit to API or something


  axios
  .post("/api/clients", formData)
  .then(res => {
    console.log(res);
  })
  .catch(error =>{
    console.log(error)
  });
};






// Draw Component Class.

    return (
      // 'Login' Component Container.
      <div className="login-section">
        {/* Form Post & Container */}
        <Form id="FormContainer" method="POST" action="/api/clients">
          {/* Site Logo & Registration Heading */}
          <Row>
            <Col md={12}>
              <h1 className="display-1" id="login-banner">
                <img id="SiteLogoLogin" width="600" src="/images/logos/logo.png" alt="SiteLogo" />
              </h1>
              <h2 className="display-2 text-center">Register Account</h2>
            </Col>
          </Row>
          {/* First & Land Name */}
          <Row>
            <Col md={6}>
              <FormGroup className="FormGroup">
                <Label for="FirstName" className="formLabel">First Name *</Label>
                <Input type="text" className="DataField" name="firstName" id="firstName" placeholder="Enter Your First Name...." bsSize="lg" required="true" onChange={handleChange}/>
              </FormGroup>
            </Col>
            <Col md={6}>
              <FormGroup className="FormGroup">
                <Label for="LastName" className="formLabel">Last Name *</Label>
                <Input type="text" className="DataField" name="lastName" id="lastName" placeholder="Enter your Last Name...." bsSize="lg" required="true" onChange={handleChange}/>
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            
              <FormGroup>
                <Label for="City" className="formLabel">Address </Label>
                <Input type="text" className="DataField" name="address" id="address" placeholder="Enter Your Street Address Here..." bsSize="lg" required="true" onChange={handleChange} />
              </FormGroup>
              </Row>
          {/*  City, State & Zip*/}
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="City" className="formLabel">City *</Label>
                <Input type="text" className="DataField" name="city" id="city" placeholder="Enter City Here..." bsSize="lg" required="true" onChange={handleChange} />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="State" className="formLabel">State *</Label>
                <Input type="text" className="DataField" name="state" id="state" placeholder="Enter State Here..." bsSize="lg" required="true"  onChange={handleChange}/>
              </FormGroup>
            </Col>
            <Col md={2}>
              <FormGroup>
                <Label for="Zip" className="formLabel">Zip Code *</Label>
                <Input type="text" className="DataField" name="zipcode" id="zipcode" placeholder="Enter Zip Code here...." bsSize="lg" required="true"  onChange={handleChange}/>
              </FormGroup>
            </Col>
          </Row>

          {/* Email Address */}
          <FormGroup>
            <Label for="Email" className="formLabel">Email Address *</Label>
            <Input type="email" className="DataField" name="email" id="email" placeholder="Enter Full Email Here (ex: johndoe@email.com)" bsSize="lg" required="true" onChange={handleChange}/>
          </FormGroup>

          {/* Phone Number */}
          <FormGroup>
            <Label for="phone" className="formLabel">Home/Mobile Phone</Label>
            <Input type="text" className="DataField" name="phone" id="phone" placeholder="Enter Phone Number Here...." bsSize="lg" onChange={handleChange} />
          </FormGroup>

          {/* Password */}
          <FormGroup>
            <Label for="Password" className="formLabel">Password *</Label>
            <Input type="password" className="DataField" name="password" id="password" placeholder="Enter Password Here..." bsSize="lg" required="true" onChange={handleChange} />
          </FormGroup>

          {/* Dropdown Bundles */}
          <FormGroup>
            <Label for="Select" className="formLabel"> Select A Service Bundle *</Label>
            <Input type="select" className="DataField" name="bundle" id="bundle" bsSize="lg" onChange={handleChange}>
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
          <Button color="success" className="hvr-grow" type="submit" id="btnSubmit" onClick ={handleSubmit}>Create Account</Button>

          {/* 'Login Now | Reset Password' Container */}
          <Row className="text-center">
            {/* Heading Text */}
            <Col className="mb-3" md={12}>
              <p id="AlreadyClient" className="display-2">Already A Client?</p>
              {/* Content Seperator */}
              <hr className="content-seperator" />
            </Col>
          </Row>
          {/* Login/Reset Password Container */}
          <Row className="text-center mt-4">
            {/* Login Text */}
            <Col md={6}>
              <a id="LoginNow" className="display-3 text-success" href="#">Login Now</a>
            </Col>
            {/* Reset Password Text */}
            <Col md={6}>
              <a id="ResetPassword" className="display-3 text-success" href="#">Reset Password</a>
            </Col>
          </Row>
        </Form>
      </div>
    );
  
};

// Export Component.
export default Login;