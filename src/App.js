// React Dependencies.
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Stylesheet Definitions.
import './App.css'; // Global CSS Site Styling.

// Media Breakpoints.
import './css/320px.css';
import './css/540px.css';
import './css/641px.css';
import './css/964px.css';
import './css/1026px.css';
import './css/1309px.css';
import './css/1652px.css';
import './css/1809px.css';

// Bootstrap Definitions.
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS Library.
import 'bootstrap/dist/js/bootstrap.min.js'; // Bootstrap JS Library.

// All React Component Definitions.
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Register from './components/Register';
import Login from './components/Login';
import ClientProfile from './components/ClientProfile';
import EditProfile from './components/EditProfile';
import Feedback from './components/Feedback';

// Draw Component Class.

const mockAuth = {
  isAuthenticated: false, // isauthenticated needs to be changed to true here for access to page
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100)  // "async" lol; (Temp).
  },
  logout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100)
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={({ location }) => (
    mockAuth.isAuthenticated === true
      ? <Component {...rest} />
      : <Redirect to={{
        pathname: "/login",
        state: { from: location }
      }} />
  )} />
)

class App extends Component {
  state = {
    redirectToReferrer: false
  }
  login = () => {
    mockAuth.authenticate(() => {
      this.setState(() => ({
        redirectToReferrer: true
      }))
    })
  }

  render() {
    return (
      <Router>
        <div>
          {/* Navbar is Always Rendered */}
          <Navbar />

          {/* This Switch Contains Routes the Navbar Links to, they are conditionally rendered */}
          <Switch>
            {/* This is the 'Home' Root Route */}
            <Route path="/" exact component={Home} />

            {/* Possible Route Paths (Global Site Routes) */}
            <Route path="/services" component={Services} />
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/client-profile" component={ClientProfile} />
            <Route path="/edit-profile" component={EditProfile} />
            <Route path="/feedback" component={Feedback} />
          </Switch>
        </div>
      </Router>
    )
  }
}

// Export Component.
export default App;
