import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './ducks/store';

class App extends Component {
  render() {
    return (

      <Provider store={ store }>
        <HashRouter>
          <div className="App">

          </div>
        </HashRouter>
      </Provider>

    );
  }
}

export default App;
