import React, { Component } from 'react';

import SwapiService from '../../Services/swapi-service';

import './RandomPlanet.css';

class RandomPlanet extends Component {
  swapiService = new SwapiService();

  state = {
    name: null,
    population: null,
    rotationPeriod: null,
    diameter: null,
    id: null
  }

  constructor(props) {
    super(props);
    this.updatePlanet();
  }

  updatePlanet() {
    const id = Math.floor(Math.random() * 20) + 2;
    this.swapiService
      .getPlanet(id)
      .then((planet) => {
        this.setState({
          id,
          name: planet.name,
          population: planet.population,
          rotationPeriod: planet.rotation_period,
          diameter: planet.diameter
        })
      });
  }

  render() {
    const { id, name, population,
      rotationPeriod, diameter } = this.state;

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

      </div>
    );
  }
}

export default RandomPlanet;