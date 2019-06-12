import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import './EarthGif.scss';

class EarthGif extends Component {
    render() {
      var ReactRotatingText = require('react-rotating-text');
      return (
        <>
        
        <div className="background">
        <div className="gif">
        <Link to="/memorymap"><Button color="black">
        <h1> <ReactRotatingText items={['WELCOME TO THE', 'MEMORY MAP']} /> </h1></Button></Link>
      
<img src="https://media.giphy.com/media/ux6AQI6MBwGqY/giphy.gif" alt="loading..." />
          
          </div>
          </div>
          </>
      )
    }
}

export default EarthGif;