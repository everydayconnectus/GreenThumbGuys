import React, {Component} from 'react'; // allows for use of components
import logo from '../logo.png'; // Logo displayed next to company name on navbar
import { Link } from "react-router-dom"; // Enables routing from page to page



// A P P _ _ C O M P O N E N T _ _ F O R _ _ N A V I G A T I O N _ _ B A R



 class  Navbar extends Component {
   render(){

   
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a className="navbar-brand text-white text-uppercase ml-5" href="#">Green Thumb Guys<img src ={logo} alt ="logo" style = {{width: "50px"}}/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto">
          <Link to ="/">
            <li className="nav-item active">
              <a className="nav-link text-white text-uppercase mx-5" ><i class="fas fa-home"></i>&nbsp;Home <span class="sr-only">(current)</span></a>
            </li>
            </Link>
            <Link to ="/about">
            <li className="nav-item">
              <a className="nav-link text-white text-uppercase mx-5" ><i class="fas fa-info-circle"></i>&nbsp;About Us</a>
            </li>
            </Link>
            <Link to ="/services">
            <li className="nav-item">
              <a className="nav-link text-white text-uppercase mx-5" ><i class="fas fa-tasks"></i>&nbsp;Services</a>
            </li>
            </Link>
            <Link to ="/login">
            <li className="nav-item">
              <a className="nav-link text-white text-uppercase mx-5" ><i class="fas fa-user-plus"></i>&nbsp;Join / Login</a>
            </li>
            </Link>
          </ul>
          
        </div>
      </nav>
    
    )
   }
}










export default Navbar;