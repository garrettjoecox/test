import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Nav from './components/nav/index.js';
import Home from './scenes/home/index.js';
import About from './scenes/about/index.js';
import 'normalize.css';
import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <Nav />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.root'));
