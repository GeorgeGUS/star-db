import React, { Component } from 'react';

import ErrorIndicator from '../ErrorIndicator/ErrorIndicator';
import ItemList from '../ItemList/ItemList';
import PersonDetails from '../PersonDetails';

import './PeoplePage.css';

class PeoplePage extends Component {
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
    return (
      <div className='row mb2'>
        <div className='col-md-6'>
          <ItemList onItemSelected={this.onPersonSelected} />
        </div>
        <div className='col-md-6'>
          <PersonDetails personId={this.state.selectedPerson} />
        </div>
      </div>
    );
  }
}

export default PeoplePage;
