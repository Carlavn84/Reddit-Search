import React, { Component } from 'react';
import Search from './components/Search';
import Results from './components/Results';
import axios from 'axios';
import reddit from './components/reddit.jpg';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: null
    }

  }
  

  componentDidMount(){
    this.getInfo;
  }
  

  getInfo =(e) => {
    e.preventDefault();

    const searchInput = e.target.elements.search.value;
    axios.get(`https://www.reddit.com/r/php/search.json?q=${searchInput}`)
      .then((res) => {
        this.setState({
          searchResults: res.data.data.children
        })
    });
  }


  render() {
    let {searchResults} = this.state;
    
    return (
      <div className="App">
        <img src={reddit} width="100px" height="70px" alt=""/>
        <br/> <br/>
        <Search getInfo = {this.getInfo} />
        <br/> <br/><br/><br/>
        {/* <Results searchResults = {searchResults} /> */}
                   
      </div>
    );
  }
}

export default App;
