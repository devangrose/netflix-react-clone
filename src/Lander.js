import React, { Component } from 'react';
import profile1 from './profile.png';
import profile2 from './profile2.png';
import profile3 from './profile3.png';
import profile4 from './profile4.png';
import ProfileCard from './ProfileCard.js';

class Lander extends Component {

  render(){
    return (
    <div className="container lander fade-in-long">
      <h1>Who's Watching?</h1>
      <div className="profile-cards">
        <ProfileCard image={profile1} name="Devan" />
        <ProfileCard image={profile2} name="Ryan" />
        <ProfileCard image={profile3} name="Megan" />
        <ProfileCard image={profile4} name="Rhonda" />
      </div>
    </div>
    );
  }
}

export default Lander;
