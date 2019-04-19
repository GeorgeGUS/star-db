import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = ({ onServiceChange }) => {
  return (
    <header className='header d-flex align-items-center'>
      <h1 className='header-title'>
        <Link to='/' className='header-link'>
          StarDB
        </Link>
      </h1>

      <ul className='header-nav nav'>
        <li className='nav-item'>
          <Link to='/people/' className='nav-link'>
            People
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/planets/' className='nav-link'>
            Planets
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/starships/' className='nav-link'>
            Starships
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/login' className='nav-link'>
            Login
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/secret' className='nav-link'>
            Secret
          </Link>
        </li>
      </ul>

      <button className='btn btn-primary btn-sm' onClick={onServiceChange}>
        Change Service
      </button>
    </header>
  );
};

export default Header;
