import React, { Component } from 'react';

import ErrorButton from '../ErrorButton/ErrorButton';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import Header from '../Header';
import PeoplePage from '../PeoplePage/PeoplePage';
import RandomPlanet from '../RandomPlanet';

import './App.css';

class App extends Component {
  state = {
    hasError: false
  };

  componentDidCatch() {
    console.log('componentDidCatch()');
    this.setState({
      hasError: true
    });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    return (
      <div className='container'>
        <Header />
        <RandomPlanet />
        {/* <ErrorButton /> */}
        <PeoplePage />
      </div>
    );
  }
}

export default App;
