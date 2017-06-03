import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ImageView from './component/imageView';

class App extends Component {
  render() {

    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to smartCloset</h2>
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
