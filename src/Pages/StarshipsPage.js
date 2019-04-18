import React, { Component } from 'react';

import { StarshipList, StarshipDetails } from '../Components/sw-components';
import Row from '../Components/Row';

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
        left={<StarshipList onItemSelected={this.onItemSelected} />}
        right={<StarshipDetails itemId={this.state.selectedItem} />}
      />
    );
  }
}

export default PeoplePage;
