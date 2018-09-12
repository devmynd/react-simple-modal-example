import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import { SimpleModal } from './SimpleModal'

class App extends Component {
  state = {
    showModal: false
  }

  openModal = () => this.setState({ showModal: true })

  closeModal = () => this.setState({ showModal: false })

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
        <button className="button" onClick={this.openModal}>
          Open Modal
        </button>
        {this.state.showModal && <SimpleModal onOutsideClick={this.closeModal}>
          <h2>Inside the Modal!</h2>
          <button className="button" onClick={this.closeModal}>
            Close Modal
          </button>
        </SimpleModal>}
        <div className="spacer" />
      </div>
    );
  }
}

export default App;
