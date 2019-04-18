import React from 'react';

import ItemDetails, { Record } from '../ItemDetails';
import { withSwapiService } from '../hoc-helpers';

const PersonDetails = props => (
  <ItemDetails {...props}>
    <Record field='gender' label='Gender' />
    <Record field='birthYear' label='Birth Year' />
    <Record field='eyeColor' label='Eye Color' />
  </ItemDetails>
);

const mapMethodsToProps = swapiService => ({
  getData: swapiService.getPerson,
  getImageUrl: swapiService.getPersonImage
});

export default withSwapiService(mapMethodsToProps)(PersonDetails);
