import React, { Component } from 'react';
import Routes from './components/Routes'
import { BrowserRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import Favicon from 'react-favicon'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Favicon url='./favicon.ico'/>
        <Helmet>
          <title>Bike Delivery</title>
        </Helmet>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
