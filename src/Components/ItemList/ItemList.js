import React from 'react';
import PropTypes from 'prop-types';

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

ItemList.defaultProps = {
  onItemSelected: () => {}
};

ItemList.propTypes = {
  onItemSelected: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  children: PropTypes.func.isRequired
};

export default ItemList;
