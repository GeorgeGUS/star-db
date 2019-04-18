import React, { Component } from 'react';

import { PersonList, PersonDetails } from '../Components/sw-components';
import Row from '../Components/Row/Row';

class PeoplePage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    return (
      <Row
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={<PersonDetails itemId={this.state.selectedItem} />}
      />
    );
  }
}

export default PeoplePage;
