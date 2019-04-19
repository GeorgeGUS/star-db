import React, { Component } from 'react';

import { SwapiServiceProvider } from '../SwapiServiceContext';
import DummySwapiService from '../../Services/DummySwapiService';
import ErrorBoundary from '../ErrorBoundary';
import Header from '../Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import SwapiService from '../../Services/SwapiService';
import {
  PeoplePage,
  PlanetsPage,
  StarshipsPage,
  LoginPage,
  SecretPage
} from '../../Pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import { StarshipDetails } from '../sw-components';

class App extends Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  onLogin = () => {
    this.setState({
      isLoggedIn: true
    });
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
    const { isLoggedIn } = this.state;
    return (
      <div className='container'>
        <ErrorBoundary>
          <SwapiServiceProvider value={this.state.swapiService}>
            <Router>
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Route path='/' render={() => <h2>Welcome to StarDB</h2>} exact />
              <Route path='/people' render={() => <h2>People</h2>} />
              <Route path='/people/:id?' component={PeoplePage} />
              <Route path='/planets' render={() => <h2>Planets</h2>} />
              <Route path='/planets' component={PlanetsPage} />
              <Route path='/starships' render={() => <h2>Starships</h2>} />
              <Route path='/starships' exact component={StarshipsPage} />
              <Route
                path='/starships/:id'
                render={({ match }) => {
                  const { id } = match.params;
                  return <StarshipDetails itemId={id} />;
                }}
              />
              <Route
                path='/login'
                render={() => (
                  <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />
                )}
              />
              <Route
                path='/secret'
                render={() => <SecretPage isLoggedIn={isLoggedIn} />}
              />
            </Router>
          </SwapiServiceProvider>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
