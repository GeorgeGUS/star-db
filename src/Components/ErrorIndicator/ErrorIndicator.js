import React from 'react';

import './ErrorIndicator.css';
import icon from './death-star-explosion.jpg';

const ErrorIndicator = () => {
  return (
    <div className='error-indicator'>
      <img className='error-icon' src={icon} alt='error icon' />
      <p className='error-title'>BOOM!</p>
      <p className='error-message'>
        Something has gone terribly \/\/r0nG
        <span role='img' aria-label='sad'>
          😱
        </span>
      </p>
      <p>
        but we already sent droids to fix it
        <span role='img' aria-label='droid'>
          🤖
        </span>
      </p>
    </div>
  );
};

export default ErrorIndicator;
