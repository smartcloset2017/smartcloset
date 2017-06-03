import React, { Component } from 'react';

const testData = [
  'https://s-media-cache-ak0.pinimg.com/originals/eb/30/07/eb3007d8ffa052d14ec5241d53026340.jpg',
  'https://i.ytimg.com/vi/EtR4AwU_wh0/maxresdefault.jpg',
  'http://static.news.zumst.com/images/24/2013/06/27/spn_PS13062700278.jpg',
  'http://pds.joins.com/news/component/htmlphoto_mmdata/201410/17/htm_201410179141c010c011.JPG',
  'http://www.nemopan.com/files/attach/images/6294/532/527/006/c84f1671412dc351b8da5bcfc6732330.jpg',
  'http://cfile28.uf.tistory.com/image/2156954B556531021B7C85',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjEyvyBUeM98-tX9JYko395OKw4UAnj5zAQBmbVKPnOA0C19-YoQ',
  'http://hei.hankyung.com/news/app/imgview.php?aid=2010100811387&photoid=201010080995&size=1',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3uKiSYZsn4o4w3_MV1T3JgCMdzsuAYHlu9dUA94jDQQxSExsHbA',
];

export default class imageView extends Component {
  constructor () {
    super();
    this.state = {
      imageArray: [],
    };
  }
  componentDidMount() {
    const testDataToComponent = testData.map(data => {
      return <img src = {data} alt = '' key = {data}/>;
    });
    this.setState({
      imageArray: testDataToComponent,
    });
    console.log('test')
  }
  render() {
    console.log('here')
    return (
      <div>
        {this.state.imageArray}
      </div>
    );
  }
}
