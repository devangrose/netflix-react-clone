import React, {Component} from 'react';
import {Icon} from 'react-icons-kit';
import {ic_play_circle_filled} from 'react-icons-kit/md/ic_play_circle_filled'

class Row extends Component {

  render(props){
    
    return (
      <div className="bigrow">
        <p>{this.props.heading}</p>
        <div className="row">
        {this.props.shows.map( show => {
          return (
            <div className="card grow">
              <div className="interior">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><Icon className="play" size={50} icon={ic_play_circle_filled}/></a>
              </div>
              <img src={show}/>
            </div>
            )
          }
        )}
        </div>
      </div>
    )
  }
}
export default Row;
