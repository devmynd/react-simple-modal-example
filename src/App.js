import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to a Simple Modal Example</h1>
        </header>
        <p className="App-intro">
          To open the modal, click the button below.
        </p>
        <button className="button">Open Modal</button>
      </div>
    );
  }
}

export default App;
