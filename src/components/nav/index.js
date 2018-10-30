import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';

const routes = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
]

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav__container">
          <div className="nav__spacer"></div>
          {routes.map(r => {
            return <NavLink exact className="nav__item" activeClassName="nav__item--active" to={r.to}>{r.text}</NavLink>
          })}
        </div>
      </div>
    )
  }
}

export default Nav;
