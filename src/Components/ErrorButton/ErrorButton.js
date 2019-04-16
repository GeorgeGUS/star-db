import React, { Component } from 'react';

import './ErrorButton.css';

class ErrorButton extends Component {
  state = {
    error: false
  };

  render() {
    if (this.state.error) {
      this.foo.bar = 1;
    }
    return (
      <button
        className='error-btn btn btn-danger btn-lg'
        onClick={() => this.setState({ error: true })}
      >
        Throw error
      </button>
    );
  }
}

export default ErrorButton;
