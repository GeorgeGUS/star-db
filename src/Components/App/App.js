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
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import { StarshipDetails } from '../sw-components';

class App extends Component {
  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false
  };

  _basePath = process.env.PUBLIC_URL;

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
    console.log(this._basePath);
    return (
      <div className='container'>
        <ErrorBoundary>
          <SwapiServiceProvider value={this.state.swapiService}>
            <Router basename={this._basePath}>
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Switch>
                <Route
                  path='/'
                  render={() => <h2>Welcome to StarDB</h2>}
                  exact
                />
                <Route
                  path={`${this._basePath}/people/:id?`}
                  component={PeoplePage}
                />
                <Route
                  path={`${this._basePath}/planets`}
                  component={PlanetsPage}
                />
                <Route
                  path={`${this._basePath}/starships`}
                  exact
                  component={StarshipsPage}
                />
                <Route
                  path={`${this._basePath}/starships/:id`}
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
                <Route render={() => <h2>Page not found</h2>} />
              </Switch>
            </Router>
          </SwapiServiceProvider>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
