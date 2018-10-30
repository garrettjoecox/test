import React, { Component } from 'react';
import './index.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="home__container">
          <div className="home__dummy-header">
            <div class="home__dummy-header-item home__dummy-header-item--red"></div>
            <div class="home__dummy-header-item home__dummy-header-item--yellow"></div>
            <div class="home__dummy-header-item home__dummy-header-item--green"></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
