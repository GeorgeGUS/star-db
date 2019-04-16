import React, { Component } from 'react';

import ErrorBoundary from '../ErrorBoundary';
import Header from '../Header';
import PeoplePage from '../PeoplePage';
import RandomPlanet from '../RandomPlanet';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <ErrorBoundary>
          <Header />
          <RandomPlanet />
          <PeoplePage />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
