import React, { Component } from 'react'; // Allows for use of components
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Allows for routing in react
import './App.css'; // imports custom css styling
import './css/400px.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // imports bootstrap css library
import 'bootstrap/dist/js/bootstrap.min.js'; // Allows js functionalities used in certain bootstrap applications
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Services from './components/Services'

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

export default App;
