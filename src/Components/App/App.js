import React, { Component } from 'react';

import { SwapiServiceProvider } from '../SwapiServiceContext';
import DummySwapiService from '../../Services/DummySwapiService';
import ErrorBoundary from '../ErrorBoundary';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import SwapiService from '../../Services/SwapiService';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../../Pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;
      console.log('switched to', Service.name);
      return {
        swapiService: new Service()
      };
    });
  };

  render() {
    return (
      <div className='container'>
        <ErrorBoundary>
          <SwapiServiceProvider value={this.state.swapiService}>
            <Router>
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Route path='/people' component={PeoplePage} />
              <Route path='/planets' component={PlanetsPage} />
              <Route path='/starships' component={StarshipsPage} />
            </Router>
          </SwapiServiceProvider>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
