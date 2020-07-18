// Dependencies.
import React, { Component } from 'react'; // Allows for use of components
import {Col, Row, Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';

// Draw Component Class.
class Login extends Component {
    render() {
        return (
            // 'Login' Component Container.
            <div className="login-section">
                <h1 id="login-banner">Sign Up Here or Access Member Login !</h1>
                <Form> 
        <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="clientFirstName" className="formLabel">First Name</Label>
            <Input type="text" name="firstName" id="firstName" placeholder="Enter your First Name" bsSize="lg"/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Label for="clientLastName" className="formLabel">Last Name</Label>
            <Input type="text" name="lastName" id="lastName" placeholder="Enter your Last Name" bsSize="lg" />
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
        <Label for="Address" className="formLabel">Address </Label>
        <Input type="text" name="address" id="clientAddress" placeholder="Enter Home Address Here..." bsSize="lg"/>
      </FormGroup>
      <Row form>
        <Col md={6}>
          <FormGroup>
            <Label for="City" className="formLabel">City</Label>
            <Input type="text" name="city" id="clientCity" bsSize="lg"/>
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Label for="State" className="formLabel">State</Label>
            <Input type="text" name="state" id="clientState" bsSize="lg"/>
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="Zip" className="formLabel">Zip</Label>
            <Input type="text" name="zip" id="clientZip" bsSize="lg"/>
          </FormGroup>  
        </Col>
      </Row>

      <FormGroup>
        <Label for="Email" className="formLabel">Email</Label>
        <Input type="email" name="email" id="clientEmail" placeholder="Enter Full Email Here (ex: johndoe@email.com)" bsSize="lg"/>
      </FormGroup>
      <FormGroup>
        <Label for="Password" className="formLabel">Password</Label>
        <Input type="password" name="password" id="clientPassword" placeholder="Enter Password Here..." bsSize= "lg" />
      </FormGroup>
      <FormGroup>
        <Label for="Select" className="formLabel"> Select Your Service Bundle</Label>
        <Input type="select" name="select" id="bundleSelect" bsSize = "lg">
          <option>Choose From the Bundles Below</option>
          <option>Basic Service Bundle (Full Year)</option>
          <option>Basic Service Bundle (Seasonal)</option>
          <option>Green Thumb Bundle (Full Year)</option>
          <option>Green Thumb BundleI (Seasonal)</option>
          <option>Premium Bundle (Full Year)</option>
          <option>Premium Bundle (Seasonal)</option>
          <option>Commercial Bundle</option>
        </Input>
      </FormGroup>
      
  
      <FormGroup>
        <Label for="exampleFile" className="formLabel">Upload Picture</Label>
        <Input type="file" name="file" id="exampleFile" bsSize = "lg"/>
        <FormText color="muted" className="formText">
         Upload a Picture of your Home and be sure that it includes the front lawn 
        </FormText>
      </FormGroup>
      
      <Button color="primary" className="hvr-grow" id="clientSubmit">Submit</Button>
    </Form>
            </div>
        );
    };
};

// Export Component.
export default Login;