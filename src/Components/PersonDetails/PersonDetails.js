import React, { Component } from 'react';

import SwapiService from '../../Services/swapi-service';

import './PersonDetails.css';
import Spinner from '../Spinner/Spinner';

class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: true
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.personId !== this.props.personId) {
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if (!personId) return;
    this.setState({
      loading: true
    })
    this.swapiService
      .getPerson(personId)
      .then((person) => {
        this.setState({
          person,
          loading: false
        });
      });
  }

  render() {
    if (!this.state.person) {
      return (
        <div className="details card">
          <span>Select a person from a list</span>
        </div>
      )
    }

    if (this.state.loading) {
      return (
        <div className="details card">
          <Spinner />
        </div>
      )
    }

    const { id, name, gender, birthYear, eyeColor } = this.state.person;

    return (
      <div className="details card">
        <img className="details-image"
          alt={name}
          width="400"
          height="550"
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

        <div className="card-body">
          <h3 className="subtitle">{name}</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Gender</td>
                <td>{gender}</td>
              </tr>
              <tr>
                <td>Birth Year</td>
                <td>{birthYear}</td>
              </tr>
              <tr>
                <td>Eye Color</td>
                <td>{eyeColor}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default PersonDetails;