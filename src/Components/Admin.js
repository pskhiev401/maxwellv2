import React, { Component } from 'react';

class Admin extends Component {
  render() {
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <div className='post_button'>Post New Listing</div>
        <div className='edit_button'>Edit Listing</div>
        
      </div>
    );
  }
}

export default Admin;
