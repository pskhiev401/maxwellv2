import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';
import axios from 'axios';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      homes: []
    };
  }

  componentDidMount() {
    axios.get('/api/getAll').then(res => {
      this.setState({ homes: res.data });
    });
  }

  render() {
    console.log(this.state);
    const navbar_items = ['Projects', 'Communities', 'About Us', 'Contact'].map((e, i) => {
        return (
          <div key={i}>
            <h3>{e}</h3>
          </div>
        );
      }
    );

    return (
      <div>
        <div className='landing_top'> Logo Section </div>
        <div className='navbar_section'>{navbar_items}</div>
        <div className='landing_cover'>
          <h3>Listings</h3>
        </div>
        <Link to='/admin'>
          <button>Go To Admin Page</button>
        </Link>
      </div>
    );
  }
}

export default Landing;
