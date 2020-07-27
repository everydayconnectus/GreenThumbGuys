// Dependencies.
import React, { Component } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";

// Draw Component Class.
class Login extends Component {
  render() {
    return (
      <div className="login-section" id="login">
        {/* Login Form & Container */}
        <Form id="LoginContainer" method="POST" action="/api/clients">
          {/* Site Logo & Login Heading */}
          <Row>
            <Col md={12}>
              <h1 className="display-1" id="login-banner">
                <img id="SiteLogologin" width="600" src="/images/logos/logo.png" alt="SiteLogo" />
              </h1>
              <h2 className="display-2 text-center">Login Below</h2>
            </Col>
          </Row>
          {/* Email Address */}
          <Row form>
            <Col md={12}>
              <FormGroup className="mt-4">
                <Label for="email" className="display-4 formLabel">Address</Label>
                <Input type="text" className="LoginField" name="email" id="email" placeholder="Enter Your Email Address..." bsSize="lg" required={true} />
              </FormGroup>
            </Col>
          </Row>
          {/* Password */}
          <Row form>
            <Col md={12}>
              <FormGroup>
                <Label for="password" className="display-4 formLabel">Password</Label>
                <Input type="password" className="LoginField" name="password" id="password" placeholder="Enter Your Password... " bsSize="lg" required={true} />
              </FormGroup>
            </Col>
          </Row>
          {/*  */}
          {/* Login Button (GET?) */}
          <Button className="hvr-grow" type="button" id="btnLogin">Login</Button>
          {/* 'login Now | Reset Password' Container */}

          {/* login/Reset Password Container */}
          <Row className="text-center mt-5">
            <Col md={12}>
              <h1 className="display-5">Don't Have An Account?</h1>
              <Link className="display-3 text-info" href="#" to="/register">Register Now</Link>
            </Col>
          </Row>
        </Form>
      </div>
    );
  };
};

// Export Component.
export default Login;