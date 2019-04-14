import React, { Component } from 'react';

import SwapiService from '../../Services/swapi-service';

import './RandomPlanet.css';

class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    planet: {},
    id: 12,
    loading: true
  }

  onPlanetLoaded = (planet) => {
    this.setState({
      planet,
      loading: false
    });
  };

  updatePlanet() {
    const { id } = this.state;
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded);
  }

  componentWillMount() {
    this.updatePlanet();
  }

  render() {
    const { id, planet: { name, population,
      rotation_period, diameter } } = this.state;

    return (
      <div className="random-planet jumbotron rounded">
        <div className="row">
          <div className="col-md-3">
            <img className="image"
              alt={name}
              width="400"
              height="400"
              src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
          </div>
          <div className="col mt-md-0 mt-3">
            <h2 className="subtitle">{name}</h2>
            <table className="table">
              <tbody>
                <tr>
                  <td>Population</td>
                  <td>{population}</td>
                </tr>
                <tr>
                  <td>Rotation Period</td>
                  <td>{rotation_period}</td>
                </tr>
                <tr>
                  <td>Diameter</td>
                  <td>{diameter}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    );
  }
}

export default RandomPlanet;