import React, { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component{
     
    componentDidMount() {
        console.log('componentDidMount');
         window.addEventListener('click', this.onCloseByClick)
         window.addEventListener('keydown', this.onCloseByKedown)
    }
    componentWillUnmount() {
        console.log('componentWillUnmount');
         window.removeEventListener ('keydown', this.onCloseByKedown)
    }
    onCloseByClick = (e) => {
        if (e.target.nodeName === "DIV") {
            this.props.onClose()
        }
    }
    onCloseByKedown = (e) => {
        if (e.code === 'Escape') {
            this.props.onClose()
        }
    }
    render() {
        // console.log(this.props.images);
        const { largeImageURL, tag } = this.props.images

        return createPortal(
            <div className="Overlay">
                <div className="Modal">
                    <img
                        src={largeImageURL}
                        alt={tag} />
                </div>
            </div>,
            modalRoot,
        )
    }
    
}



