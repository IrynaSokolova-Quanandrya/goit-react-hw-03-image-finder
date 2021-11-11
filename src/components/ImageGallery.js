import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import Modal from './Modal';


class ImageGallery extends Component {
  state = {
    showModal: false,
    modalImage: '',
  }
  
  componentDidMount() {
    console.log('componentDidMount');
    window.addEventListener('click', e => {
      console.log(e.target.src);
      if (e.target.nodeName === "IMG") {
        this.toggleModal();
      }
      // if (e.target.src === this.props.images.src) {
        
      //   this.setState({ modalSRC: this.props.images.src })
      //   console.log(this.state);
      // }
    } )
  }
  showModal = (e) => {
    console.log(e.target.src);
    this.setState({ showModal: true })
    const modalImage = this.props.images.includes(e.target.src)
    return this.state({modalImage})
  }
  closeModal = () => {
    this.setState(({ showModal: false }))
  };
  render() {
    const { images } = this.props
    // console.log({images});
    return (
      
      <ul className="ImageGallery">
        {
         images.map((image) => 
           <ImageGalleryItem
             key={image.id}
             image={image}
             onOpen={this.showModal}
           />
          )}
        {this.showModal && <Modal
          onClose={this.closeModal}
          images={images} />}

  
      </ul>
    )
  }
  
  
} 

export default ImageGallery
