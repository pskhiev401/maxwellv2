import React, { Component } from 'react';
import './Admin.scss';
import axios from 'axios';

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      home_type: [],
      bed: [],
      bath: [],
      sqft: [],
      lot_size: [],
      status: [],
      photo_url: []
    };
  }

  handleSubmit = () => {
    //destructuring objects in this.state for DRY-er code
    let home_type,
      bed,
      bath,
      sqft,
      lot_size,
      status,
      photo_url = this.state;

    axios
      .post('/api/postNew', {
        home_type: home_type,
        bed: bed,
        bath: bath,
        sqft: sqft,
        lot_size: lot_size,
        status: status,
        photo_url: photo_url
      })
      .then(console.log('Submitted to Backend!'));
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <div className='post_button'>
          <h2>Post New Listing</h2>
          <form className='new_post_form'>
            {/* using setState in each input field instead of making function with 'type=xyz' */}
            <input
              onChange={e => this.setState({ home_type: e.target.value })}
              placeholder='Home Type (Single Family/Condo/Townhouse)'
            />

            <input
              onChange={e => this.setState({ bed: e.target.value })}
              placeholder='Bedrooms'
            />
            <input
              onChange={e => this.setState({ bath: e.target.value })}
              placeholder='Bathrooms'
            />
            <input
              onChange={e => this.setState({ sqft: e.target.value })}
              placeholder='Square Foot'
            />
            <input
              onChange={e => this.setState({ lot_size: e.target.value })}
              placeholder='Lot Size (sqft)'
            />
            <input
              onChange={e => this.setState({ status: e.target.value })}
              placeholder='Status'
            />
            <input
              onChange={e => this.setState({ photo_url: e.target.value })}
              placeholder='Photo URL'
            />
          </form>
          <h2 onClick={() => this.handleSubmit()}>Submit</h2>
          {/* handleSubmit function passes all objects inside this.state  */}
        </div>
        <div className='edit_button'>
          <h2>Edit Listing</h2>
          <form className='update_listing'>
            <input
              placeholder='Enter Listing Address'
              onChange={e => this.setState({ find_listing: e.target.value })}
            />
            <h2>Find</h2>
          </form>
        </div>
      </div>
    );
  }
}

export default Admin;
