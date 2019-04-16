import React, { Component } from 'react';

import ErrorIndicator from '../ErrorIndicator';
import Header from '../Header';
import ItemList from '../ItemList';
import PeoplePage from '../PeoplePage';
import PersonDetails from '../PersonDetails';
import RandomPlanet from '../RandomPlanet';
import SwapiService from '../../Services/SwapiService';

import './App.css';

class App extends Component {
  swapiService = new SwapiService();

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
        <PeoplePage />
      </div>
    );
  }
}

export default App;
