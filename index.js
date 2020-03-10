import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import './style.scss';
import logo from './react-logo.png'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
      num: 0
    };
  }

increaseNumber = () => {
  this.setState({
    num: this.state.num + 1
  })
}

decreaseNumber = () => {
  this.setState({
    num: this.state.num - 1
  })
}

resetNumber = () => {
  this.setState({
    num: 0
  })
}

  render() {
    return (
      <div className="container">
        <div className="title">
          <h1>React Counter</h1>
        </div>
        <div className="num-container">
          <h2>
          {this.state.num}
          </h2>
        </div>
        <div>
          <button onClick={ this.decreaseNumber }> - </button>
          <button onClick={ this.increaseNumber }> + </button>
          <button className="reset-btn" onClick={ this.resetNumber }> Reset </button>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
