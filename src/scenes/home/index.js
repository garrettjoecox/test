import React, { Component } from 'react';
import commandHandler from './services/commands/index.js'
import './index.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { lines: commandHandler('login') };
  }

  addLine(lines) {
    this.setState({ lines: this.state.lines.concat(lines) })
  }

  async handleKeyDown(e) {
    const target = e.target;
    if (e.key === 'Enter') {
      await this.addLine(target.value);

      try {
        const v = await commandHandler(target.value);
        await this.addLine(v);
      } catch (e) {
        await this.addLine(e.message);
      }

      target.value = '';
    }
  }

  render() {
    return (
      <div className="home">
        <div className="home__container">
          <div className="home__dummy-header">
            <div className="home__dummy-header-item home__dummy-header-item--red"></div>
            <div className="home__dummy-header-item home__dummy-header-item--yellow"></div>
            <div className="home__dummy-header-item home__dummy-header-item--green"></div>
          </div>
          <div className="home__content">
            {this.state.lines.map((l, i) => {
              return (<div key={i} className="home__content-line" dangerouslySetInnerHTML={{ __html: `> ${l}` }}></div>);
            })}
          </div>
          <div className="home__input-container">
            <div className="home__input-prefix">></div>
            <input autoFocus className="home__input" onKeyDown={(e) => this.handleKeyDown(e)} />
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
