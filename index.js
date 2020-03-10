import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import './style.scss';

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
      <div class="container">
        <h1>React Counter</h1>
        <h2>
          {this.state.num}
        </h2>
        <div>
          <button onClick={ this.increaseNumber }> + </button>
          <button onClick={ this.decreaseNumber }> - </button>
          <button onClick={ this.resetNumber }> Reset </button>
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
