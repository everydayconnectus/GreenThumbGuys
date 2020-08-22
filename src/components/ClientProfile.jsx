// Dependencies.
import React, { Component } from 'react';
import DashSideBar from './DashSideBar';

// Draw Component Class.
class ClientProfile extends Component {
  render() {
    return (
      <>
        {/* Sidebar Container */}
        <div className="container-fluid client-dashboard">
          {/* Sidebar Row */}
          <div className="row">
            {/* Sidebar Prop Tag */}
            <DashSideBar />
          </div>
        </div>
      </>
    )
  }
}

// Export Component.
export default ClientProfile;