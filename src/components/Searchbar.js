import React, { Component } from "react";

class Searchbar extends Component {
    state = {
        query:'',
    }
    handleChange = (e) => {
        // console.log(e);
        this.setState({query: e.target.value.toLowerCase()})
        // console.log(this.state);
        
    }
    handleSubmit = (e) => {
        e.preventDefault();

        if (this.state.query.trim() === '') {
            alert('Wrong query')
            return;
        }
        this.props.onSubmit(this.state.query)
        this.setState({ query: '' });
    }
    render() {
        return (
            <header className="Searchbar">
                <form onSubmit={this.handleSubmit}className="SearchForm">
                    <button type="submit" className="SearchForm-button">
                        <span className="SearchForm-button-label">Search</span>
                    </button>
                    <input
                        className="SearchForm-input"
                        onChange={this.handleChange}
                        value={this.state.query}
                        name='query'
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
    
}
// {/* <header className="Searchbar">
//   <form className="SearchForm">
//     <button type="submit" className="SearchForm-button">
//       <span className="SearchForm-button-label">Search</span>
//     </button>

//     <input
//       className="SearchForm-input"
//       type="text"
//       autocomplete="off"
//       autofocus
//       placeholder="Search images and photos"
//     />
//   </form>
// </header> */}
export default Searchbar