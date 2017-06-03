import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ImageView from './component/imageView';
import axios from 'axios';
// Read the file into memory.

const URL = 'temp';

class App extends Component {
  constructor() {
    super();
    this.getImage = this.getImage.bind(this);
  }
  getImage() {
    axios.get(URL)
    .then(result => {
      console.log(result);
    })

  }
  render() {
    this.getImage();
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to smartCloset</h2>
            <button onClick={this.sendImage}>
              Activate Lasers
            </button>
          <img src={logo} className="App-logo" />
        </div>
        <div>
          <ImageView />
        </div>
      </div>
    );
  }
}

export default App;
