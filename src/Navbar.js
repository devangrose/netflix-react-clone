import React, { Component } from 'react';
import netflix from './netflix.png';
import profilePic from './profile.png';
import { Icon } from 'react-icons-kit';
import {search} from 'react-icons-kit/fa/search';
import {bell} from 'react-icons-kit/fa/bell';
import {caretDown} from 'react-icons-kit/fa/caretDown';

class Navbar extends Component {

  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark rounded">
        <a className="navbar-brand" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src={netflix}/></a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">TV Shows</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Movies</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Recently Added</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">My List</a>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><Icon size={24} icon={search}/></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">DVD</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><Icon size={24} icon={bell}/></a>
          </li>
        </ul>
        <a className="nav-link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src={profilePic}/></a>
        <Icon size={24}icon={caretDown}/>
      </nav>
    )
  }
}

export default Navbar;
