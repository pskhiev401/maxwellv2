import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Landing.scss";
import axios from "axios";

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      homes: []
    };
  }

  componentDidMount() {
    axios.get("/api/getAll").then(res => {
      this.setState({ homes: res.data });
    });
  }

  render() {
    console.log(this.state.homes);
    return (
      <div>
        <h1 className="landing_cover">Clients Custom Homes</h1>
        <div className="listings">
          <h3>Listings</h3>
        </div>
        <Link to="/admin">
          <button>Go To Admin Page</button>
        </Link>
      </div>
    );
  }
}

export default Landing;
