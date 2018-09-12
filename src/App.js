import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from './Navbar';
import netflixLogo from './netflix.png';
import './App.css';
import Row from './Row';

const count = 0;

class App extends Component {
  render() {
  const images = [
    'http://www.facetheforce.today/random/400?r=1',
    'http://www.facetheforce.today/random/400?r=2',
    'http://www.facetheforce.today/random/400?r=3',
    'http://www.facetheforce.today/random/400?r=4',
    'http://www.facetheforce.today/random/400?r=5',
    'http://www.facetheforce.today/random/400?r=6',
  ];
    return (
      <div className="App">
        <Navbar />
        <Row shows={getRandomImages()} heading={'That Darn Star Wars Crap'}/>
        <Row shows={getRandomImages()} heading={'More Star Wars Crap'}/>
        <Row shows={getRandomImages()} heading={'Even More Star Wars Crap'}/>
        <Row shows={getRandomImages()} heading={'Look at All This Star Wars Crap'}/>
        <Row shows={getRandomImages()} heading={'All the Star Wars Crap'}/>
      </div>
    );
  }
}

function getRandomImages() {
  var toReturn = [];
  for(var i = 0; i < 6; i++){
    toReturn.push(`http://www.facetheforce.today/random/400?r=${Math.floor(Math.random() * 100)}`);
  }
  return toReturn;
}
export default App;
