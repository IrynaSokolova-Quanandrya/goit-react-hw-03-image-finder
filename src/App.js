import React, { Component } from 'react';
import './App.css';
import './styles/common.css'
import { ToastContainer} from 'react-toastify';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
// import fetchImg from './components/image-api';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from "react-loader-spinner";
import Button from './components/Button';
// import Modal from './components/Modal'


class App extends Component {
  state = {
    mainURL: 'https://pixabay.com/api/',
    secondaryURL:'&image_type=photo&orientation=horizontal&per_page=12',
    images: [],
    myKey:'24253422-4477825d93e6eb518eebc16ed',
    query: '',
    page: 1,
    status: 'idle',
    error: null

  }
   
  componentDidUpdate(prevProps, prevState) {
    const { mainURL, secondaryURL, query, page, myKey } = this.state;
    // console.log(images);
    
    if (prevState.query !== query) {
      // this.pageReset();
      this.setState({status:'pending'})
      // console.log(prevState);
      // console.log(this.state);

      fetch(`${mainURL}?q=${query}&page=${page}&key=${myKey}${secondaryURL}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(new Error(`Can not find ${query}!`));
      })
      .then((images) => {
        this.setState((prevState) => ({ images: [...prevState.images, images.hits], status: 'resolved' }))
        
      })
    }
    
    
  
  }
  // smoothScroll = () => {
  //   window.scrollTo({
  //     top: Searchbar,
  //     behavior: 'smooth',
  //   });
  // }
  pageReset = () => {
    this.setState({page: 1})
  }
  nextPage = () => {
    this.setState((prevState)=>({page: prevState+1}))
  }
  searchQuery = query => {
    this.setState({ query });
    this.pageReset();
  }
  render() {
    
    // console.log(this.state);
    const { status, images } = this.state
    return (
      <>
      <Searchbar onSubmit={this.searchQuery} />
      <ToastContainer autoClose={3000} />
    {status === 'resolved' && <ImageGallery images={images} />}
    {status === 'pending' &&
      <Loader
        className='Loader'
        type="Puff"
        color="#00BFFF"
        height={50}
        width={50}
        timeout={3000} />
    }
    {status === 'resolved' && <Button />
    }
    {/* <Modal />  */}
    </>
   )
  }
}

export default App