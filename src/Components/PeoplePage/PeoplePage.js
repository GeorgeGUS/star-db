import React, { Component } from 'react';

import ErrorBoundary from '../ErrorBoundary';
import ItemList from '../ItemList';
import ItemDetails, { Record } from '../ItemDetails';
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
    const { getPerson, getPersonImage } = this.swapiService;
    const itemDetails = (
      <ErrorBoundary>
        <ItemDetails
          itemId={this.state.selectedPerson}
          getData={getPerson}
          getImageUrl={getPersonImage}
        >
          <Record field='gender' label='Gender' />
          <Record field='birthYear' label='Birth Year' />
          <Record field='eyeColor' label='Eye Color' />
        </ItemDetails>
      </ErrorBoundary>
    );
    return <Row left={itemList} right={itemDetails} />;
  }
}

export default PeoplePage;
