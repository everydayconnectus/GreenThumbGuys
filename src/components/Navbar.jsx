// Dependencies.
import React, { Component } from 'react';
import { Link } from "react-router-dom";

// Draw Component Class.
class Navbar extends Component {
  render() {
    return (
      // 'Navbar' Component Container.
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        {/* Official 'Green Thumb Guys' Logo */}
        <Link className="navbar-brand" to="/">
          <img class="hvr-shrink" height="51" width="100%" id="SiteLogo" src="/images/logos/logo.png" />
        </Link>
        {/* Site Navigation (Mobile Collapse) */}
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#SiteNavigation" aria-controls="SiteNavigation" aria-expanded="false" aria-label="Toggle Navigation">
          {/* Collapsed Navbar 'Hamburger Icon' */}
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Collapse Container / Navbar Links */}
        <div className="collapse navbar-collapse" id="SiteNavigation">
          <ul className="navbar-nav ml-auto">

            {/* Home Link */}
            <li className="nav-item hvr-shrink active">
              <Link className="nav-link text-white text-uppercase mx-5" to="/" ><i className="fas fa-home"></i> Home <span className="sr-only">(current)</span></Link>
            </li>

            {/* About / Services Link */}
            <li className="nav-item hvr-shrink">
              <Link className="nav-link text-white text-uppercase mx-5" to="/about"><i className="fas fa-info-circle"></i> Our Services</Link>
            </li>

            {/* Contact Us Page? */}
            {/* <li className="nav-item hvr-shrink">
              <Link className="nav-link text-white text-uppercase mx-5" to="/services"><i className="fas fa-tasks"></i> Services</Link>
            </li> */}

            {/* Login / Sign Up Link */}
            <li className="nav-item hvr-shrink">
              <Link className="nav-link text-white text-uppercase mx-5" to="/login"><i className="fas fa-user-plus"></i> Join / Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

// Export Component.
export default Navbar;