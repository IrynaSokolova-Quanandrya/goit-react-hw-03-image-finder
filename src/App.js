import React, { Component } from 'react';
import './App.css';
import './styles/common.css'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from "react-loader-spinner";
import Button from './components/Button';
// import Modal from './components/Modal'


class App extends Component {
  state = {
    url:'https://pixabay.com/api/',
    images: null,
    myKey:'24253422-4477825d93e6eb518eebc16ed',
    query: '',
    page: 1,
    status: 'idle'


  }
  // componentDidMount() {
  //   this.smoothScroll();
  // }
  
  componentDidUpdate(prevProps, prevState) {
    const { url, images, query, page, myKey } = this.state;
    // console.log(prevState);
    // if (prevState.images !== images) {
    //   this.setState({ status: 'pending' })
    //   return;
    // }
    
    fetch(`${url}?q=${query}&page=${page}&key=${myKey}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(r => r.json())
      .then(images => this.setState({ images })
      )
    
  }
  smoothScroll = () => {
    window.scrollTo({
      top: Searchbar,
      behavior: 'smooth',
    });
  }
  pageReset = () => {
    this.setState({page: 1})
  }
  
  searchQuery = query => {
    this.setState({ query });
    console.log(query);
    this.pageReset();
  }
  render() {
    const { status, images } = this.state

    if (status === 'idle') {
      return <Searchbar onSubmit={this.searchQuery} />
    }
    if (status === 'resolved') {
      return <ImageGallery images={images}/>
    }
    if (status === 'pending') {
      return <Loader
        className='Loader'
        type="Puff"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={3000}/>
    }
    if (status === 'resolved') {
      return <Button />
    }
        // {/* <Modal />  */}
    
  } 
}

export default App