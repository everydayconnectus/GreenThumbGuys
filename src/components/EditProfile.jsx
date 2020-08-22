// Dependencies.
import React, { Component } from 'react';

// JSX Props.
import DashSideBar from './DashSideBar'; // 'Dashboard' base.
import AccDetails from './AccDetails'; // 'Account Details' base.

// Draw Component Class.
class EditProfile extends Component {
  render() {
    return (
      <>
        {/* Account Details Container */}
        <div className="container-fluid client-dashboard">
          {/* Account Details Row */}
          <div className="row">
            {/* Sidebar Prop Tag */}
            <DashSideBar />
            {/* Account Details Prop Tag */}
            <AccDetails />
          </div>
        </div>
      </>
    )
  }
}

// Export Component.
export default EditProfile;