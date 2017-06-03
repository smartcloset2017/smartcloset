import React, { Component } from 'react';

export default class imageView extends Component {
  render() {
    const testDataToComponent = this.props.imageData.map(data => {
      return <img src = {data} alt = '' key = {data} height='auto' width='400' />;
    });
    return (
      <div>
        {testDataToComponent}
      </div>
    );
  }
}
