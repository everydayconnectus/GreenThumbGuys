// Dependencies.
import React, { Component } from 'react'; // allows for use of components
// import logo from '../logo.png'; // Logo displayed next to company name on navbar
import { Link } from "react-router-dom"; // Enables routing from page to page

// A P P _ _ C O M P O N E N T _ _ F O R _ _ N A V I G A T I O N _ _ B A R


// Renders 'navbar.jsx'.
class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        {/* Green Thumb Guys Logo */}
        <Link className="navbar-brand text-white text-uppercase ml-5" id="nav-banner" to="/">
          <h1>
            <img id="GreenGuy" src="/images/logos/logo.png" alt="logo" style={{ width: "60%" }} />
          </h1>
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>

        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto">

            <li className="nav-item active">
              <Link className="nav-link text-white text-uppercase mx-5" to="/" ><i className="fas fa-home"></i> Home <span className="sr-only">(current)</span></Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link text-white text-uppercase mx-5" to="/about"><i className="fas fa-info-circle"></i> About Us</Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link text-white text-uppercase mx-5" to="/services"><i className="fas fa-tasks"></i> Services</Link>
            </li>


            <li className="nav-item">
              <Link className="nav-link text-white text-uppercase mx-5" to="/login"><i className="fas fa-user-plus"></i> Join / Login</Link>
            </li>
          </ul>
        </div>
      </nav>

    )
  }
}










export default Navbar;