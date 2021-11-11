import React, { Component } from "react";
import PropTypes from "prop-types";

class ImageGalleryItem extends Component{
    render() {
        const {webformatURL, tags,} = this.props.image
        return (
            <li className="ImageGalleryItem">
                <img
                    src={webformatURL}
                    alt={tags}
                    className="ImageGalleryItem-image"
                    showModal={this.props.onOpen}
                />
            </li>
        )
    }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.object.isRequired,
  onOpen: PropTypes.func.isRequired,
};
export default ImageGalleryItem



