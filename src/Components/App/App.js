import React, { Component } from 'react';

import ErrorBoundary from '../ErrorBoundary';
import Header from '../Header';
import Row from '../Row';
import PeoplePage from '../PeoplePage';
import RandomPlanet from '../RandomPlanet';
import ItemDetails, { Record } from '../ItemDetails';
import SwapiService from '../../Services/SwapiService';
import {
  PersonList,
  PlanetList,
  StarshipList,
  PersonDetails,
  PlanetDetails,
  StarshipDetails
} from '../sw-components';

import './App.css';

class App extends Component {
  swapiService = new SwapiService();

  render() {
    return (
      <div className='container'>
        <ErrorBoundary>
          <Header />
          {/* <RandomPlanet /> */}
          {/* <PeoplePage /> */}
          <Row
            left={<PersonDetails itemId={11} />}
            right={<StarshipDetails itemId={9} />}
          />
          <PlanetDetails itemId={5} />
          <PersonList>{({ name }) => <span>{name}</span>}</PersonList>
          <PlanetList>{({ name }) => <span>{name}</span>}</PlanetList>
          <StarshipList>{({ name }) => <span>{name}</span>}</StarshipList>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
