// Dependencies.
import React, { useState, useContext } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Message from '../Components/Message';
import { Link } from "react-router-dom";
import AuthService from '../Services/AuthService';
import { AuthContext } from '../Context/AuthContext';

const Login = props => {
    const [user, setUser] = useState({ username: "", password: "" });
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext);

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const onSubmit = e => {
        e.preventDefault();
        AuthService.login(user).then(data => {
            console.log(data);
            const { isAuthenticated, user, message } = data;
            if (isAuthenticated) {
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated);
            }
            else
                setMessage(message);
        });
    }

    return (
        <div className="login-section" id="login">
            {message ? <Message message={message} /> : null}
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
                {/* Username */}
                <Row form>
                    <Col md={12}>
                        <FormGroup className="mt-4">
                            <Label for="username" className="display-4 formLabel">Username</Label>
                            <input type="text"
                                name="username"
                                onChange={onChange}
                                className="form-control bg-info border-0 form-control-lg form-control"
                                placeholder="Enter username" />
                        </FormGroup>
                    </Col>
                </Row>
                {/* Password */}
                <Row form>
                    <Col md={12}>
                        <FormGroup>
                            <Label for="password" className="display-4 formLabel">Password</Label>
                            <input type="password"
                                name="password"
                                onChange={onChange}
                                className="form-control bg-info border-0 form-control-lg form-control"
                                placeholder="Enter Password" />
                        </FormGroup>
                    </Col>
                </Row>
                {/*  */}
                {/* Login Button (GET?) */}
                <Button className="hvr-grow" type="button" id="btnLogin" onClick={onSubmit}>Login</Button>
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