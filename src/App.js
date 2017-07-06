import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>React Music</h2>
        </div>
      </div>
          /*
        <p className="App-intro">
            Welcome to React Music
        </p>


      </div>
      */
    );
  }
}

export default App;
