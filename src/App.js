import React, { Component } from 'react';
import './App.css';
import './styles/common.css'
import { ToastContainer} from 'react-toastify';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from "react-loader-spinner";
import Button from './components/Button';


class App extends Component {
  state = {
    mainURL: 'https://pixabay.com/api/',
    secondaryURL:'&image_type=photo&orientation=horizontal&per_page=12',
    images: [],
    myKey:'24253422-4477825d93e6eb518eebc16ed',
    query: '',
    page: 1,
    status: 'idle',
    error: null,

  }
   
  componentDidUpdate(prevProps, prevState) {
    const { mainURL, secondaryURL, query, page, myKey } = this.state;
    
    if (prevState.query !== query) {
      this.setState({ status: 'pending' })
      
      fetch(`${mainURL}?q=${query}&page=${page}&key=${myKey}${secondaryURL}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(new Error(`Can not find ${query}!`));
      })
        .then((response) => {
          // console.log(response);
          // console.log(response.hits);
          this.setState({ images: response.hits, page: page + 1, status: 'resolved' })
          // console.log(this.state.page);
        })
      

      if (page > 1) {
        window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: "smooth",
        });
      }
    }
    
  }
  pageReset = () => {
    this.setState({page: 1})
  }
  searchQuery = query => {
    this.setState({ query });
    this.pageReset();
  }
  loadMore = () => {
    this.setState((prev) => ({ page: prev.page + 1 }))
    
    const { mainURL, secondaryURL, query, page, myKey } = this.state;
      // console.log(page);
      fetch(`${mainURL}?q=${query}&page=${page}&key=${myKey}${secondaryURL}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        return Promise.reject(new Error(`Can not find ${query}!`));
      })
      .then((response) => {
        this.setState((prevState) => ({ images: [...prevState.images, ...response.hits], status: 'resolved' }))
        
      })
     
    }
  
 
  render() {
    const { status, images } = this.state
    // console.log(images);
    return (
      <>
      <Searchbar onSubmit={this.searchQuery} />
      <ToastContainer autoClose={3000} />
        {status === 'resolved' &&
          <ImageGallery
            images={images}/>
        }
        {status === 'pending' &&
          <Loader
            className='Loader'
            type="Puff"
            color="#00BFFF"
            height={50}
            width={50}
            timeout={3000} />
        }
        {status === 'resolved' && <Button onClick={this.loadMore}/>
        }
    </>
   )
  }
}

export default App