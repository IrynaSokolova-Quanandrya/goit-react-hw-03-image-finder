import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from "prop-types";

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
        const { onGetImg, onClose } = this.props
        console.log({ onGetImg, onClose });
        return createPortal(
          
            <div className="Overlay" onClose={onClose}>
                <div className="Modal">
                    <img
                        src={onGetImg.img}
                    alt={onGetImg.alt} 
                    />
                </div>
            </div>,
            modalRoot,
        )
    }
    
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  modalImage: PropTypes.object.isRequired,
};

