import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';

class ImageGallery extends Component {
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.images.hits !== this.props.images.hits) {
  //     console.log(prevProps.images.hits);
  //     console.log(this.props.images.hits);
  //   }
  // }
  
  render() {
    // console.log(this.props.images.hits);
    const { hits } = this.props.images
    // console.log(hits);
    return (
      <ul className="ImageGallery">
        {
          hits.map(({id, webformatURL, tags}) =>
            <ImageGalleryItem id={id} src={webformatURL} alt={tags} />
          )}
  
      </ul>
    )
  }
  
  
}

export default ImageGallery
