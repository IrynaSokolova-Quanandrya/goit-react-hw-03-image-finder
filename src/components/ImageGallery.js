import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends Component {
  
  render() {
  
    
    console.log(this.props.images);
    return (
      <ul className="ImageGallery">
        {
         this.props.images.map(({id, webformatURL, tags}) => 
            <ImageGalleryItem id={id} src={webformatURL} alt={tags} />
          )}
  
      </ul>
    )
  }
  
  
}

export default ImageGallery
