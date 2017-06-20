import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import ImageView from './component/imageView';
import axios from 'axios';
// Read the file into memory.

const URL = 'https://8bb741eb.ngrok.io/getData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      imageData: [
        'https://s-media-cache-ak0.pinimg.com/originals/eb/30/07/eb3007d8ffa052d14ec5241d53026340.jpg',
        'https://i.ytimg.com/vi/EtR4AwU_wh0/maxresdefault.jpg',
        'http://static.news.zumst.com/images/24/2013/06/27/spn_PS13062700278.jpg',
        'http://pds.joins.com/news/component/htmlphoto_mmdata/201410/17/htm_201410179141c010c011.JPG',
        'http://www.nemopan.com/files/attach/images/6294/532/527/006/c84f1671412dc351b8da5bcfc6732330.jpg',
        'http://cfile28.uf.tistory.com/image/2156954B556531021B7C85',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjEyvyBUeM98-tX9JYko395OKw4UAnj5zAQBmbVKPnOA0C19-YoQ',
        'http://hei.hankyung.com/news/app/imgview.php?aid=2010100811387&photoid=201010080995&size=1',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3uKiSYZsn4o4w3_MV1T3JgCMdzsuAYHlu9dUA94jDQQxSExsHbA',
      ],
      likes: [],
    };
    this.getImage = this.getImage.bind(this);
    this.updateLikes = this.updateLikes.bind(this);
    this.showLikes = this.showLikes.bind(this);
  }
  getImage() {
    axios.get(URL)
    .then(result => {
      console.log('success!!');
      if(result.data !== 'fail') {
        console.log(result.data);
        this.setState({
          imageData: result.data,
        })
      }
    })
  }
  updateLikes(url) {
    const newLikes = this.state.likes.slice();
    if (newLikes.indexOf(url) === -1)
      newLikes.push(url);
    this.setState({
      likes: newLikes,
    })
  }

  showLikes() {
    const URL = [...this.state.likes];
    console.log(URL)
    this.setState({
      imageData: URL,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to smartCloset</h2>
            <button onClick={this.getImage}>
              test button
            </button>
          <img src={logo} className="App-logo" onClick={this.showLikes}/>
        </div>
        <div>
          <ImageView
            imageData={this.state.imageData}
            updateLikes={this.updateLikes}/>
        </div>
      </div>
    );
  }
}

export default App;
