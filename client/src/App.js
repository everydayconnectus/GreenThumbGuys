// Dependencies.
import React from 'react';
import Home from './Components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Register from './Components/Register';
import Services from './Components/Services';

// Stylesheet Definitions.
import '../src/App.css'; // Global CSS Site Styling.

// Media Breakpoints.
import './css/320px.css';
import './css/540px.css';
import './css/641px.css';
import './css/964px.css';
import './css/1026px.css';
import './css/1309px.css';
import './css/1652px.css';
import './css/1809px.css';


// Render JSX Components.
function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/services" component={Services} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Router>
  );
}

// Export App.
export default App;
