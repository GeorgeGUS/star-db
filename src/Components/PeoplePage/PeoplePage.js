import React, { Component } from 'react';

import ErrorIndicator from '../ErrorIndicator';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import Row from '../Row';
import SwapiService from '../../Services/SwapiService';

import './PeoplePage.css';

class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null,
    hasError: false
  };

  componentDidCatch(error, info) {
    this.setState({
      hasError: true
    });
  }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
        renderItem={({ name, gender, birthYear }) =>
          `${name} (${gender}, ${birthYear})`
        }
      />
    );
    const personDetails = (
      <PersonDetails personId={this.state.selectedPerson} />
    );
    return <Row left={itemList} right={personDetails} />;
  }
}

export default PeoplePage;
