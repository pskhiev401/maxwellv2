import React, { Component } from 'react';
import './Admin.scss';

class Admin extends Component {
  constructor() {
    super();
    this.state = {
      type:[],
      addr: [],
      status: [],
      bd:[],
      ba:[],
      sqft:[],
      lot_size:[],
      photo_url:[],
      find_listing:[]
    };
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h1>Admin Dashboard</h1>
        <div className='post_button'>
          <h2>Post New Listing</h2>
          <form className='new_post_form'>
            <input onChange={ e =>this.setState({type :e.target.value})}placeholder='Home Type (Single Family/Condo/Townhouse)'/>
            <input onChange={ e =>this.setState({addr :e.target.value})}placeholder='Address'/>
            <input onChange={ e =>this.setState({status :e.target.value})}placeholder='Status'/>
            <input onChange={ e =>this.setState({bd :e.target.value})}placeholder='Bedrooms'/>
            <input onChange={ e =>this.setState({ba :e.target.value})}placeholder='Bathrooms'/>
            <input onChange={ e =>this.setState({sqft :e.target.value})}placeholder='Square Foot'/>
            <input onChange={ e =>this.setState({lot_size:e.target.value})}placeholder='Lot Size (sqft)'/>
            <input onChange={ e =>this.setState({photo_url:e.target.value})}placeholder='Photo URL'/>

          </form>
          <h2>Submit</h2>
        </div>
        <div className='edit_button'>
          <h2>Edit Listing</h2>
          <form className='update_listing'>
            <input placeholder='Enter Listing Address' onChange={e =>this.setState({find_listing: e.target.value })}/>
            <h2>Find</h2>
          </form>
        </div>
      </div>
    );
  }
}

export default Admin;
