import React, { Component } from 'react';

import SwapiService from '../../Services/SwapiService';

import './PersonDetails.css';
import Spinner from '../Spinner/Spinner';
import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';

class PersonDetails extends Component {
  swapiService = new SwapiService();

  state = {
    person: null,
    loading: false,
    error: false
  };

  componentDidMount() {
    this.updatePerson();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.personId !== this.props.personId) {
      this.updatePerson();
    }
  }

  onError = err => {
    this.setState({
      error: true,
      loading: false
    });
    console.error(err);
  };

  updatePerson() {
    const { personId } = this.props;
    if (!personId) return;
    this.setState({
      loading: true,
      error: false
    });
    this.swapiService
      .getPerson(personId)
      .then(person => {
        this.setState({
          person,
          loading: false
        });
      })
      .catch(this.onError);
  }

  render() {
    const { person, loading, error } = this.state;
    if (!(person || error)) {
      return (
        <div className='details card'>
          <span>Select a person from a list</span>
        </div>
      );
    }
    const isError = error ? <ErrorIndicator /> : null;
    const isLoading = loading ? <Spinner /> : null;
    const hasData = !(error || loading);
    const personData = hasData ? <PersonView {...person} /> : null;

    return (
      <div className='details card'>
        {isError}
        {isLoading}
        {personData}
      </div>
    );
  }
}

const PersonView = ({ id, name, gender, birthYear, eyeColor }) => {
  return (
    <>
      <img
        className='details-image'
        alt={name}
        width='400'
        height='550'
        src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
      />

      <div className='card-body'>
        <h3 className='subtitle'>{name}</h3>
        <table className='table'>
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
    </>
  );
};

export default PersonDetails;
