import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__splash">
          Hello World
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
