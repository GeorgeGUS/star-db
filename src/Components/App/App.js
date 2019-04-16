import React, { Component } from 'react';

import Header from '../Header';
import ItemList from '../ItemList';
import PersonDetails from '../PersonDetails';
import RandomPlanet from '../RandomPlanet';

import './App.css';

class App extends Component {
  state = {
    selectedPerson: null
  };

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  render() {
    const { selectedPerson } = this.state;
    return (
      <div className='container'>
        <Header />
        <RandomPlanet />
        <div className='row mb2'>
          <div className='col-md-6'>
            <ItemList onItemSelected={this.onPersonSelected} />
          </div>
          <div className='col-md-6'>
            <PersonDetails personId={selectedPerson} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
