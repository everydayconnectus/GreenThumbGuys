// Dependencies.
const express = require('express');
const userRouter = express.Router();
const passport = require('passport');
const passportConfig = require('../passport');
const JWT = require("jsonwebtoken");
const User = require('../models/User');

// Create Signed Auth Token.
const signToken = userID => {
    return JWT.sign({
        iss: "!@#$%^&*()_+",
        sub: userID
    }, "!@#$%^&*()_+", { expiresIn: "1h" });
}

// User Registration Route.
userRouter.post('/register', (req, res) => {
    const { username, password, role } = req.body;
    User.findOne({ username }, (err, user) => {
        if (err)
            res.status(500).json({ message: { msgBody: "Error has occured.", msgError: true } });
        if (user)
            res.status(400).json({ message: { msgBody: "username is already taken!", msgError: true } });
        else {
            const newUser = new User({ username, password, role });
            newUser.save(err => {
                if (err)
                    res.status(500).json({ message: { msgBody: "Error has occured.", msgError: true } });
                else
                    res.status(201).json({ message: { msgBody: "Account successfully created!", msgError: false } });
            });
        }
    });
});

// Login Route.
userRouter.post('/login', passport.authenticate('local', { session: false }), (req, res) => {
    if (req.isAuthenticated()) {
        const { _id, username, role } = req.user;
        const token = signToken(_id);
        res.cookie('access_token', token, { httpOnly: true, sameSite: true });
        res.status(200).json({ isAuthenticated: true, user: { username, role } });
    }
});

// Logout Route.
userRouter.get('/logout', passport.authenticate('jwt', { session: false }), (req, res) => {
    res.clearCookie('access_token');
    res.json({ user: { username: "", role: "" }, success: true });
});

// Auth Persistence.
userRouter.get('/auth', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { username, role } = req.user;
    res.status(200).json({ isAuthenticated: true, user: { username, role } });
});

// Export Route.
module.exports = userRouter;