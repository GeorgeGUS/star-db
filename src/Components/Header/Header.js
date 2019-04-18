import React from 'react';

import './Header.css';

const Header = ({ onServiceChange }) => {
  return (
    <header className='header d-flex align-items-center'>
      <h1 className='header-title'>
        <a href='/' className='header-link'>
          StarDB
        </a>
      </h1>

      <ul className='header-nav nav'>
        <li className='nav-item'>
          <a className='nav-link' href='/people'>
            People
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/planets'>
            Planets
          </a>
        </li>
        <li className='nav-item'>
          <a className='nav-link' href='/starships'>
            Starships
          </a>
        </li>
      </ul>

      <button className='btn btn-primary btn-sm' onClick={onServiceChange}>
        Change Service
      </button>
    </header>
  );
};

export default Header;
