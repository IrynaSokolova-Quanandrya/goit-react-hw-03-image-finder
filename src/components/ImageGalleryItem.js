import React, { Component } from "react";
import PropTypes from "prop-types";

class ImageGalleryItem extends Component{
    render() {
        const {webformatURL, tags, largeImageURL, onOpen, onGetImg} = this.props
        return (
            <li className="ImageGalleryItem"
                onClick={() => onGetImg(largeImageURL, tags)}
            >
                <img
                    src={webformatURL}
                    alt={tags}
                    className="ImageGalleryItem-image"
                    showModal={onOpen}
                />
            </li>
        )
    }
}

ImageGalleryItem.propTypes = {
  onGetImg: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
};
export default ImageGalleryItem



