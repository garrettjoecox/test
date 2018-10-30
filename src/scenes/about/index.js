import React, { Component } from 'react';
import portrait from './portrait.jpg';
import './index.css';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="about__container">
          <div className="about__left">
            <img className="about__portrait" src={portrait} alt="Portrait" />
          </div>
          <div className="about__right">
            <div className="about__heading">
              Hello world, I'm <span className="about__heading--purple">Garrett Cox</span>.
            </div>
            <div className="about__content">
              software engineer

              family

              what I do in my free time

              what I listen to
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
