import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';
import axios from 'axios';

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      homes: [],
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }

  componentDidMount() {
    axios.get('/api/getAll').then(res => {
      this.setState({ homes: res.data });
    });
  }

  render() {
    console.log(this.state);
    const navbar_items = ['Projects', 'Communities', 'About Us', 'Contact'].map(
      (e, i) => {
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
        <Link to='/admin'>
          <button>Go To Admin Page</button>
        </Link>
        <div className='landing_cover'>
          <h3>Cover Image</h3>
        </div>
        {/* <div className='dfw__map'>Map</div>
        <div className='about__us'>About Us</div> */}
        <section className='contact_form'>
          <h3>Contact Us</h3>
          <input
            required
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            required
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type='text'
            name='phone'
            id='phone'
            placeholder='Phone'
            value={this.state.phone}
            onChange={e => this.setState({ name: e.target.value })}
          />
          <textarea
            required
            name='message'
            id='message'
            rows='4'
            placeholder='Message'
            value={this.state.message}
            onChange={e => this.setState({ message: e.target.value })}
          />
        </section>
      </div>
    );
  }
}

export default Landing;
