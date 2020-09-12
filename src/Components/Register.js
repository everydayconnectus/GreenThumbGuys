import React, { useState, useRef, useEffect } from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from "react-router-dom";
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';

const Register = props => {
    const [user, setUser] = useState({ username: "", password: "", role: "" });
    const [message, setMessage] = useState(null);
    let timerID = useRef(null);

    useEffect(() => {
        return () => {
            clearTimeout(timerID);
        }
    }, []);

    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    const resetForm = () => {
        setUser({ username: "", password: "", role: "" });
    }

    const onSubmit = e => {
        e.preventDefault();
        AuthService.register(user).then(data => {
            let { message } = data;
            setMessage(message);
            resetForm();
            if (!message.msgError) {
                timerID = setTimeout(() => {
                    props.history.push('/login');
                }, 2000)
            }
        });
    }

    return (


        <div>

            <div className="register-section">
                {message ? <Message message={message} /> : null}
                {/* Form Post & Container */}
                <Form id="FormContainer" onSubmit={onSubmit} >
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
                                <Label for="username" className="formLabel">First Name *</Label>
                                <Input type="text"
                                    name="username"
                                    bsSize="lg"
                                    onChange={onChange}
                                    className="form-control DataField"
                                    placeholder="Enter First Name" />
                            </FormGroup>

                        </Col>
                        <Col md={6}>
                            <FormGroup className="FormGroup">
                                <Label for="password" className="formLabel">Password *</Label>
                                <Input type="password"
                                    name="password"
                                    bsSize="lg"
                                    onChange={onChange}
                                    className="form-control DataField"
                                    placeholder="Enter Password" />
                            </FormGroup>
                        </Col>
                        <Col md={6}>
                            <FormGroup className="FormGroup">
                                <Label for="role" className="formLabel">Role (user/admin) *</Label>
                                <Input type="text"
                                    name="role"
                                    bsSize="lg"
                                    onChange={onChange}
                                    className="form-control DataField"
                                    placeholder="What type of user are you?" />
                            </FormGroup>
                        </Col>
                    </Row>

                    {/* Create Account Button (POST) */}

                    <Button color="success" className="hvr-grow" type="submit" id="btnSubmit">Register</Button>

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
                            <Link id="loginNow" className="display-3 text-success" href="#" to="/login">Login Now</Link>
                        </Col>
                    </Row>
                </Form>

            </div>
        </div>
    )
}

export default Register;