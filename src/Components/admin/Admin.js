import React, { Component } from 'react';
import './Admin.scss';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

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

  handleSubmit = e => {
    //destructuring objects in State
    // e.preventDefault();
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
        <AppBar position='static' color='primary'>
          <Toolbar>
            <Typography variant='h4' color='inherit'>
              Admin Dashboard
            </Typography>
          </Toolbar>
        </AppBar>

        {/* <h1>Admin Dashboard</h1> */}
        <div className='post_button'>
          <Paper elevation={1}>
            <Typography variant='h5'>Post New Listing</Typography>
          </Paper>

          <form className='new_post_form'>
            {/* using setState in each input field instead of making function with 'type=xyz' */}
            <TextField
              id='standard-with-placeholder'
              label='Hometype'
              placeholder='Single/Condo/Family Home'
              margin='normal'
              onChange={e => this.setState({ home_type: e.target.value })}
              placeholder='Home Type (Single Family/Condo/Townhouse)'
              value={this.state.home_type}
            />
            <TextField
              id='standard-with-placeholder'
              label='Bedrooms'
              margin='normal'
              onChange={e => this.setState({ bed: e.target.value })}
              value={this.state.bed}
            />
            <TextField
              id='standard-with-placeholder'
              label='Bathrooms'
              margin='normal'
              onChange={e => this.setState({ bath: e.target.value })}
              value={this.state.bath}
            />
            <TextField
              id='standard-with-placeholder'
              label='Squarefoot'
              placeholder='Sqft'
              margin='normal'
              onChange={e => this.setState({ sqft: e.target.value })}
              value={this.state.sqft}
            />
            <TextField
              id='standard-with-placeholder'
              label='Lot Size'
              placeholder='Lot Size in sqft'
              margin='normal'
              onChange={e => this.setState({ lot_size: e.target.value })}
              value={this.state.lot_size}
            />
            <TextField
              id='standard-with-placeholder'
              label='Home Status'
              placeholder='Sold/Pending'
              margin='normal'
              onChange={e => this.setState({ home_status: e.target.value })}
              value={this.state.home_status}
            />
            <TextField
              id='standard-with-placeholder'
              label='Photo URL'
              margin='normal'
              onChange={e => this.setState({ photo_url: e.target.value })}
              value={this.state.photo_url}
            />
            <TextField
              id='standard-with-placeholder'
              label='Home address'
              margin='normal'
              onChange={e => this.setState({ home_address: e.target.value })}
              value={this.state.home_address}
            />
          </form>

          {/* <h2 onClick={() => this.handleSubmit()}>Submit</h2> */}
          <Button
            variant='contained'
            color='default'
            size='large'
            onClick={e => this.handleSubmit()}
          >
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
