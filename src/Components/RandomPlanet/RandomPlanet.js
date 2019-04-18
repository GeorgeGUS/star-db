import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorIndicator from '../ErrorIndicator';
import Spinner from '../Spinner';
import SwapiService from '../../Services/SwapiService';

import './RandomPlanet.css';

class RandomPlanet extends Component {
  static defaultProps = {
    updateInterval: 10000
  };

  static propTypes = {
    updateInterval: PropTypes.number
  };

  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  };

  componentDidMount() {
    const { updateInterval } = this.props;
    this.updatePlanet();
    this.interval = setInterval(this.updatePlanet, updateInterval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onPlanetLoaded = planet => {
    this.setState({ planet, loading: false });
  };

  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random() * 18) + 2;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);
  };

  render() {
    const { planet, loading, error } = this.state;
    const hasData = !(loading || error);
    const spinner = loading ? <Spinner /> : null;
    const errorMsg = error ? <ErrorIndicator /> : null;
    const content = hasData ? <PlanetView {...planet} /> : null;
    return (
      <div className='random-planet jumbotron rounded d-flex'>
        {spinner}
        {errorMsg}
        {content}
      </div>
    );
  }
}

const PlanetView = ({ id, name, population, rotationPeriod, diameter }) => {
  return (
    <div className='row'>
      <div className='col-md-3'>
        <img
          className='image'
          alt={name}
          width='400'
          height='400'
          src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}
        />
      </div>
      <div className='col mt-md-0 mt-3'>
        <h2 className='subtitle'>{name}</h2>
        <table className='table'>
          <tbody>
            <tr>
              <td>Population</td>
              <td>{population}</td>
            </tr>
            <tr>
              <td>Rotation Period</td>
              <td>{rotationPeriod}</td>
            </tr>
            <tr>
              <td>Diameter</td>
              <td>{diameter}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RandomPlanet;
