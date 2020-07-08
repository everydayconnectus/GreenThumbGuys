// React Dependencies.
import React, { Component } from 'react'; // Allows for use of components
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Allows for routing in react

// Stylesheet Definitions.
import './App.css'; // Global CSS Site Styling.
import './css/400px.css'; // Style for: 'smartphones, iPhone, portrait 480x320 phones' (Until 400px).

// Bootstrap Definitions.
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS Library.
import 'bootstrap/dist/js/bootstrap.min.js'; // Bootstrap JS Library.

// All React Component Definitions.
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Services from './components/Services'

// Draw Component Class.
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </Router>
    )
  }
}

// Export Component.
export default App;
