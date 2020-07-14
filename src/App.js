// React Dependencies.
import React, { Component } from 'react'; // Allows for use of components
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Allows for routing in react

// Stylesheet Definitions.
import './App.css'; // Global CSS Site Styling.

// Media Breakpoints.
import './css/320px.css'; /* smartphones, iPhone, portrait 480x320 phones */
import './css/540px.css'; /* portrait e-readers (Nook/Kindle), smaller tablets @ 600 or @ 640 wide. */
import './css/641px.css'; /* portrait tablets, portrait iPad, landscape e-readers, landscape 800x480 or 854x480 phones */
import './css/964px.css'; /* tablet, landscape iPad, lo-res laptops ands desktops */
import './css/1026px.css'; /* hi-res laptops and desktops */
import './css/1309px.css';
import './css/1652px.css';

// Bootstrap Definitions.
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS Library.
import 'bootstrap/dist/js/bootstrap.min.js'; // Bootstrap JS Library.

// All React Component Definitions.
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Login from './components/Login';

// Possible Dashboard Page Route (Placeholder For New Content to Come).
import Dashboard from './components/Dashboard';

// Draw Component Class.
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" component={Services} />
            <Route path="/login" component={Login} />

            {/* Possible Dashboard Page Route (Placeholder For New Content to Come). */}
            <Route path="/dashboard" component={Dashboard} />
          </Switch>
        </div>
      </Router>
    )
  }
}

// Export Component.
export default App;
