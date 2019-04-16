import React, { Component } from 'react';

import ErrorBoundary from '../ErrorBoundary';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import Row from '../Row';
import SwapiService from '../../Services/SwapiService';

import './PeoplePage.css';

class PeoplePage extends Component {
  swapiService = new SwapiService();

  state = {
    selectedPerson: null
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    const itemList = (
      <ItemList
        onItemSelected={this.onPersonSelected}
        getData={this.swapiService.getAllPeople}
      >
        {i => `${i.name} (${i.birthYear})`}
      </ItemList>
    );
    const personDetails = (
      <ErrorBoundary>
        <PersonDetails personId={this.state.selectedPerson} />
      </ErrorBoundary>
    );
    return <Row left={itemList} right={personDetails} />;
  }
}

export default PeoplePage;
