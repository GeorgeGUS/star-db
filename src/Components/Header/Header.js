import React, { Component } from 'react';

import './Header.css';

class Header extends Component {
  render() {
    return (
      <header className="header d-flex align-items-center">
        <h1 className="header-title">
          <a href="#" className="header-link">
            StarDB
          </a>
        </h1>

        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link" href="#">People</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Planets</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Starships</a>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;