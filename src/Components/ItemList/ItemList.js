import React from 'react';

import SwapiService from '../../Services/SwapiService';
import { withData } from '../hoc-helpers';

import './ItemList.css';

const ItemList = ({ data, onItemSelected, children: getLabel }) => {
  const items = data.map(item => {
    const { id } = item;
    const label = getLabel(item);
    return (
      <li
        key={id}
        className='list-group-item list-group-item-action'
        onClick={() => onItemSelected(id)}
      >
        {label}
      </li>
    );
  });

  return <ul className='item-list list-group'>{items}</ul>;
};

const { getAllPeople } = new SwapiService();

export default withData(ItemList, getAllPeople);
