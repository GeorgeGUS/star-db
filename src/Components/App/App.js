import React, { Component } from 'react';

import ErrorBoundary from '../ErrorBoundary';
import Header from '../Header';
import Row from '../Row';
import PeoplePage from '../PeoplePage';
import RandomPlanet from '../RandomPlanet';
import ItemDetails from '../ItemDetails';
import SwapiService from '../../Services/SwapiService';

import './App.css';

class App extends Component {
  swapiService = new SwapiService();

  render() {
    const {
      getPerson,
      getStarship,
      getPersonImage,
      getStarshipImage
    } = this.swapiService;

    const personDetails = (
      <ItemDetails
        itemId={11}
        getData={getPerson}
        getImageUrl={getPersonImage}
      />
    );

    const starshipDetails = (
      <ItemDetails
        itemId={5}
        getData={getStarship}
        getImageUrl={getStarshipImage}
      />
    );

    return (
      <div className='container'>
        <ErrorBoundary>
          <Header />
          {/* <RandomPlanet />
          <PeoplePage /> */}
          <Row left={personDetails} right={starshipDetails} />
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
