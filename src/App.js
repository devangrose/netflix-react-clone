import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import Lander from './Lander';
import Navbar from './Navbar';
import netflixLogo from './netflix.png';
import './App.css';
import Row from './Row';
import Content from './Content.js';
const count = 0;

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navbar />
        <Router>
          <div>
          <Route exact path="/" component={Lander}>Lander</Route>
          <Route path="/watch" component={Content}>Content</Route>
        </div>
        </Router>
      </div>
    );
  }
}

export default App;
