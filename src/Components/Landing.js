import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss';

class Landing extends Component {
  constructor(){
    super()
      this.state = {
        homes: []
      }
  }

  componentDidMount(){
    //axios.get(`/api/homes`).then(results => this.setState({homes: results.data})
  }
  render() {
    console.log(this.state.homes)
    return (
      <div>
        <h1>Client's Landing</h1>
        <Link to='/admin'><button>Go To Admin Page</button></Link>
        <div className='listings'>
          <h3>Listings</h3>
        </div>
      </div>
    );
  }
}

export default Landing;
