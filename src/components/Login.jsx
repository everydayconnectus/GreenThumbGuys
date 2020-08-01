// Dependencies.
import React, { Component, useState } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link, Redirect } from "react-router-dom";








const mockAuth = {
  isAuthenticated: false,    // isauthenticated needs to be changed to true here for access to page
  authenticate(cb){
    this.isAuthenticated = true
    setTimeout(cb, 100)  //fake async
  },
  logout(cb){
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}


const initialFormData = Object.freeze({

  email: "",
  password: "",
  
});

const Login= () => {
  const [formData, updateFormData] = useState(initialFormData);

 // Handle Data Coming in and Clean It Up.
 const handleChange = (e) => {
  updateFormData({
    ...formData,
    // Trim off Potential Whitepace From Fields.
    [e.target.name]: e.target.value.trim()
  });
};


const handleSubmit = (e) => {
  // Revent Reload Behavior.
  e.preventDefault()
  // POST to the Clients API Route Using Axios.

};





// Draw Component Class.
// class Login extends Component {

  const [redirectToReferrer, setStatus ] = useState(false)


//  state = {
//     redirectToReferrer: false
//   }
//  login = () => {
//     mockAuth.authenticate(()=>{
//       this.setState(()=>({
//     redirectToReferrer: true
//       }))
//     })
//   }





  
  // render() {


    // const {redirectToReferrer} = this.state
    if (redirectToReferrer ===true){
      return(
        <Redirect to = "/client" />
      )
    }


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
                <Input type="text" className="LoginField" name="email" id="email" placeholder="Enter Your Email Address..." bsSize="lg" required={true} onChange={handleChange} />
              </FormGroup>
            </Col>
          </Row>
          {/* Password */}
          <Row form>
            <Col md={12}>
              <FormGroup>
                <Label for="password" className="display-4 formLabel">Password</Label>
                <Input type="password" className="LoginField" name="password" id="password" placeholder="Enter Your Password... " bsSize="lg" required={true}  onChange={handleChange}/>
              </FormGroup>
            </Col>
          </Row>
          {/*  */}
          {/* Login Button (GET?) */}
          <Button className="hvr-grow" type="button" id="btnLogin" onClick={handleSubmit} onClick={()=> setStatus(true)}>Login</Button>
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





// Export Component.
export default Login;