import React, { Component } from 'react';
import Routes from './components/Routes'
import { BrowserRouter } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
        </header> */}
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
