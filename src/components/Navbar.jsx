// Dependencies.
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import { NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

// Draw Component Class.
class Navbar extends Component {
  render() {
    return (
      // 'Navbar' Component Container.
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        {/* Official 'Green Thumb Guys' Logo */}
        <Link className="navbar-brand" to="/">
          <img ClassName="hvr-shrink" height="51" width="70%" id="SiteLogo" src="/images/logos/logo.png" alt="SiteLogo" />
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
              <Link className="nav-link text-white text-uppercase mx-5" to="/services"><i className="fas fa-info-circle"></i> Our Services</Link>
            </li>

            {/* Saving route for possible 'Contact Us' page or future dashboard for client data. */}
            {/* <li className="nav-item hvr-shrink">
              <Link className="nav-link text-white text-uppercase mx-5" to="/services"><i className="fas fa-tasks"></i> Services</Link>
            </li> */}

            {/* Login / Sign Up Link */}
            <li className="nav-item hvr-shrink">
              {/* <Link className="nav-link text-white text-uppercase mx-5" to="/login"><i className="fas fa-user-plus"></i> Login / Register</Link> */}


              <UncontrolledDropdown setActiveFromChild>
                <DropdownToggle tag="a" className="nav-link text-white text-uppercase mx-5" caret>
                  <i className="fas fa-user-plus text-white"></i><Link to="/login" > <span className="text-white">Register</span></Link>
                </DropdownToggle>

                <DropdownMenu>
                  <Link to="/login" > <DropdownItem to="/login" active>Link</DropdownItem></Link>
                </DropdownMenu>
              </UncontrolledDropdown>

            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

// Export Component.
export default Navbar;