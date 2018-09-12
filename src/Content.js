import React, { Component } from 'react';
import Row from './Row.js';

class Content extends Component {

  render(){
    return (
      <div className="content fade-in">
        <Row shows={getRandomImages()} heading={'That Darn Star Wars Crap'}/>
        <Row shows={getRandomImages()} heading={'More Star Wars Crap'}/>
        <Row shows={getRandomImages()} heading={'Even More Star Wars Crap'}/>
        <Row shows={getRandomImages()} heading={'Look at All This Star Wars Crap'}/>
        <Row shows={getRandomImages()} heading={'All the Star Wars Crap'}/>
      </div>
    )
  }
}
function getRandomImages() {
  var toReturn = [];
  console.log(window.width);
  for(var i = 0; i < window.innerWidth / 250; i++){
    toReturn.push(`http://www.facetheforce.today/random/400?r=${Math.floor(Math.random() * 200)}`);
  }
  return toReturn;
}

export default Content;
