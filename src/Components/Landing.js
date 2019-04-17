import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Landing</h1>
        <Link to='/admin'> <button >Go To Admin Page</button></Link>
      </div>
    );
  }
}

export default Landing;
