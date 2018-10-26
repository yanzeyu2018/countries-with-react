import React, { Component } from 'react';
import Header from './components/Header';
import Main1 from './components/Main1';
import Footer from './components/Footer';
import countries  from './countries.js';

import './App.css';
//console.log(countries)


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header className="App-header" 
        />
        
        <Main1 />
        
        <Footer
        />
        
        

      </div>
    );
  }
}

export default App;
