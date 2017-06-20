import React, { Component } from 'react';
import QRCode from 'qrcode.react';
import Modal from 'react-modal'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
const URL = [
  'http://www.miamasvin.co.kr/product/detail.html?product_no=42142&cate_no=551&display_group=1',
  'http://www.pippin.co.kr/shop/shopdetail.html?branduid=209790',
  'http://www.aboki.net/shop/shopdetail.html?branduid=73036&xcode=388&mcode=008&scode=&type=Y&sort=sellcnt&cur_code=388008&GfDT=bWZ3UQ%3D%3D',
  'http://shop.adidas.co.kr/PF020401.action?PROD_CD=CE8181',
]
export default class imageView extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      url: '',
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.urlUpdate = this.urlUpdate.bind(this);
  }

  openModal() {
    const url = URL[Math.floor(Math.random() * (URL.length - 1))];
    this.setState({
      modalIsOpen: true,
      url: url,
    });
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }
  urlUpdate() {
    this.openModal()
  }

  render() {
    const urlUpdate = this.urlUpdate;
    const updateLikes = this.props.updateLikes;
    const testDataToComponent = this.props.imageData.map(data => {
      return <img src = {data} alt = '' key = {data} height='auto' width='400' onClick={() => {
          updateLikes(data);
          this.urlUpdate();
        }}/>;
    });
    return (
      <div>
        {testDataToComponent}
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="QRCode Modal"
          >
          <QRCode value={this.state.url}/>
        </Modal>
      </div>
    );
  }
}
