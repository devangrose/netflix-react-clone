import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ProfileCard extends Component {

  render(props){
    return (
    <div className="profile-card">
      <Link to="/watch">
      <img className="profile-image" src={this.props.image}/>
      <p>{this.props.name}</p>
    </Link>
    </div>
    )
  }
}

export default ProfileCard;
