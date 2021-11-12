import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  render() {
    const { images, showModal, onGetImg } = this.props
    console.log({onGetImg});
    return (
      
      <ul className="ImageGallery">
        {
         images.map(({id, webformatURL, tags, largeImageURL}) => 
           <ImageGalleryItem
             key={id}
             webformatURL={webformatURL}
             tags={tags}
             largeImageURL={largeImageURL}
             onOpen={showModal}
             onGetImg={onGetImg}

           />
           
          )}
      </ul>
    )
  }
  
  
} 

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  showModal: PropTypes.func.isRequired,
  onGetImg: PropTypes.func.isRequired,
};

export default ImageGallery
