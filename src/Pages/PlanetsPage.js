import React, { Component } from 'react';

import { PlanetList, PlanetDetails } from '../Components/sw-components';
import Row from '../Components/Row';

class PlanetsPage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = selectedItem => {
    this.setState({ selectedItem });
  };

  render() {
    return (
      <Row
        left={<PlanetList onItemSelected={this.onItemSelected} />}
        right={<PlanetDetails itemId={this.state.selectedItem} />}
      />
    );
  }
}

export default PlanetsPage;
