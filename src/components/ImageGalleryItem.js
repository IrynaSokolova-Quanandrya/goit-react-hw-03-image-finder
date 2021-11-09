import React, { Component } from "react";

class ImageGalleryItem extends Component{
    render() {
        const {id, src, alt} = this.props
        return (
            <li id={id} className="ImageGalleryItem">
                <img src={src} alt={alt} className="ImageGalleryItem-image" />
            </li>
        )
    }
}

export default ImageGalleryItem



