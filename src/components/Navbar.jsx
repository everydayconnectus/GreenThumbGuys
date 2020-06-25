import React, {Component} from 'react'; // allows for use of components
import logo from '../logo.png'; // Logo displayed next to company name on navbar
import { Link } from "react-router-dom"; // Enables routing from page to page



// A P P _ _ C O M P O N E N T _ _ F O R _ _ N A V I G A T I O N _ _ B A R



 class  Navbar extends Component {
   render(){

   
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <Link className="navbar-brand text-white text-uppercase ml-5" to="/">Green Thumb Guys<img src ={logo} alt ="logo" style = {{width: "50px"}}/></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav ml-auto">
          
            <li className="nav-item active">
              <Link className="nav-link text-white text-uppercase mx-5" to="/" ><i class="fas fa-home"></i>&nbsp;Home <span class="sr-only">(current)</span></Link>
            </li>
            
           
            <li className="nav-item">
              <Link className="nav-link text-white text-uppercase mx-5" to="/about"><i class="fas fa-info-circle"></i>&nbsp;About Us</Link>
            </li>
            
           
            <li className="nav-item">
              <Link className="nav-link text-white text-uppercase mx-5" to="/services"><i class="fas fa-tasks"></i>&nbsp;Services</Link>
            </li>
            
            
            <li className="nav-item">
              <Link className="nav-link text-white text-uppercase mx-5" to="/login"><i class="fas fa-user-plus"></i>&nbsp;Join / Login</Link>
            </li>
            
          </ul>
          
        </div>
      </nav>
    
    )
   }
}










export default Navbar;