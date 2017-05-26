import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Portada from './components/Portada'
import Guitarras from './components/Guitarras'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Portada/>
        <Guitarras/>
        <Footer/>
      </div>
    );
  }
}

export default App;
