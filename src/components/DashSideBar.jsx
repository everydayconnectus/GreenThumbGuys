// React Dependencies.
import React, { Component } from "react";
import { Badge, NavItem, Nav } from 'reactstrap';
import { NavLink } from "react-router-dom";
import axios from "axios";

class DashSideBar extends Component {
  state = {
    client: {}
  }

  // ----- Calling ----- //
  componentDidMount() {
    //  let ID = prompt("Enter the user profile you'd like to authenticate.")
    //  this.getClient(ID);
    this.getClient("5f380b1de5e1ec4a747c6b20");
  }

  getClient = (id) => {
    axios.get(`/api/clients/${id}`)
      .then((response) => {
        const data = response.data;
        this.setState({ client: data });
        console.log(this.props.match.params.id);
        console.log(data);
        document.getElementById("ClientName").innerHTML = data.firstName + "'s Profile";
      })
      .catch((error) => {
        console.log("There is an error, Sorry");
      });
  };


  render() {
    const { client } = this.state;

    return (
      <>
        {/* Sidebar Container */}
        <nav className="sidebar bg-dark text-center">
          {/* Sidebar Profile Container */}
          <div id="ProfileContainer">
            {/* Sidebar Profile Pic */}
            <img id="ProfilePic" src={client.pic} alt={client.pic} />
            {/* Sidebar Dash Details Container */}
            <div id="DashDetailsContainer">
              {/* Client Profile - FullName Display */}
              <h1 className="text-success" id="ClientDashName">
                {client.firstName + " " + client.lastName}
              </h1>
              {/* Bundle Info */}
              <Badge className="Badge mb-2" color="success">{client.bundle}</Badge>
              {/* Profile / Nav Route Seperator */}
              <hr />
              {/* Dashbard Navigation */}
              <Nav className="text-white" vertical>
                {/* My Account Route Link */}
                <NavItem>
                  <NavLink exact activeClassName="main-nav-active" className="hvr-shrink text-white" to="/edit-profile"><i className="fa fa-user-circle-o" aria-hidden="true"></i> My Account</NavLink>
                </NavItem>
                {/* Feedback Route Link */}
                <NavItem>
                  <NavLink exact activeClassName="main-nav-active" className="hvr-shrink text-white" to="/feedback"><i className="fa fa-wpforms" aria-hidden="true"></i> Send Feedback</NavLink>
                </NavItem>
              </Nav>
            </div>
          </div>
        </nav>
      </>
    )
  }
}

// Export Component.
export default DashSideBar;