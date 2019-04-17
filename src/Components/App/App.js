import React, { Component } from 'react';

import ErrorBoundary from '../ErrorBoundary';
import Header from '../Header';
import Row from '../Row';
import PeoplePage from '../PeoplePage';
import RandomPlanet from '../RandomPlanet';
import SwapiService from '../../Services/SwapiService';
import { SwapiServiceProvider } from '../SwapiServiceContext';

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
          <SwapiServiceProvider value={this.swapiService}>
            <Header />
            {/* <RandomPlanet /> */}
            {/* <PeoplePage /> */}
            <Row
              left={<PersonDetails itemId={11} />}
              right={<StarshipDetails itemId={9} />}
            />
            <PlanetDetails itemId={5} />

            <PersonList />
            <PlanetList />
            <StarshipList />
          </SwapiServiceProvider>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
