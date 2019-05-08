import React, { Component } from 'react';
import './Admin.scss';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      home_type: '',
      bed: 0,
      bath: 0,
      sqft: 0,
      lot_size: 0,
      home_status: '',
      photo_url: '',
      home_address: '',
      homes: []
    };
  }

  componentDidMount() {
    this.getAllHomes();
  }

  getAllHomes = () => {
    axios.get('/api/getAll').then(res => {
      this.setState({ homes: res.data });
    });
  };

  handleSubmit = () => {
    //destructuring objects in State
    const {
      home_type,
      bed,
      bath,
      sqft,
      lot_size,
      home_status,
      photo_url,
      home_address
    } = this.state;
    axios
      .post('/api/postNew', {
        home_type: home_type,
        bed: bed,
        bath: bath,
        sqft: sqft,
        lot_size: lot_size,
        home_status: home_status,
        photo_url: photo_url,
        home_address: home_address
      })
      .then(response => {
        this.setState({ homes: response.data });
      })
      .then(
        this.setState({
          home_type: '',
          bed: 0,
          bath: 0,
          sqft: 0,
          lot_size: 0,
          home_status: '',
          photo_url: '',
          home_address: ''
        })
      );
    alert(`New post successfully listed!`);
  };

  render() {
    console.log(this.state);

    let displayListings = this.state.homes.map((e, i) => {
      return (
        <div key={i}>
          <h1> {e.home_type}</h1>
          <h3>{e.home_address}</h3>
        </div>
      );
    });
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <div className='post_button'>
          <h2>Post New Listing</h2>
          <form className='new_post_form'>
            {/* using setState in each input field instead of making function with 'type=xyz' */}
            <TextField
              id='standard-with-placeholder'
              label='Hometype'
              placeholder='Single/Condo/Family Home'
              margin='normal'
            />
            <TextField
              id='standard-with-placeholder'
              label='Bedrooms'
              // placeholder='Bedrooms'
              margin='normal'
            />
            <TextField
              id='standard-with-placeholder'
              label='Bathrooms'
              // placeholder='Bathrooms'
              margin='normal'
            />
            <TextField
              id='standard-with-placeholder'
              label='Squarefoot'
              placeholder='Sqft'
              margin='normal'
            />
            <TextField
              id='standard-with-placeholder'
              label='Lot Size'
              placeholder='Lot Size in sqft'
              margin='normal'
            />
            <TextField
              id='standard-with-placeholder'
              label='Home Status'
              placeholder='Sold/Pending'
              margin='normal'
            />
            <TextField
              id='standard-with-placeholder'
              label='Photo URL'
              // placeholder='Photo URL'
              margin='normal'
            />
            <TextField
              id='standard-with-placeholder'
              label='Home address'
              // placeholder='Adrress'
              margin='normal'
            />

            {/* <input
              onChange={e => this.setState({ home_type: e.target.value })}
              placeholder='Home Type (Single Family/Condo/Townhouse)'
              value={this.state.home_type}
            /> */}

            {/* <input
              onChange={e => this.setState({ bed: e.target.value })}
              // placeholder='Bedrooms'
              value={this.state.bed}
            />
            <input
              onChange={e => this.setState({ bath: e.target.value })}
              // placeholder='Bathrooms'
              value={this.state.bath}
            />
            <input
              onChange={e => this.setState({ sqft: e.target.value })}
              // placeholder='Square Foot'
              value={this.state.sqft}
            />
            <input
              onChange={e => this.setState({ lot_size: e.target.value })}
              // placeholder='Lot Size (sqft)'
              value={this.state.lot_size}
            />
            <input
              onChange={e => this.setState({ home_status: e.target.value })}
              placeholder='Status'
              value={this.state.home_status}
            />
            <input
              onChange={e => this.setState({ photo_url: e.target.value })}
              placeholder='Photo URL'
              value={this.state.photo_url}
            />
            <input
              onChange={e => this.setState({ home_address: e.target.value })}
              placeholder='address'
              value={this.state.home_address}
            /> */}
          </form>
          {/* <h2 onClick={() => this.handleSubmit()}>Submit</h2> */}
          <Button variant='contained' color='default'>
            Upload
          </Button>
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
          {displayListings}
        </div>
      </div>
    );
  }
}

export default Admin;
