import React, { Component } from 'react';

import Spinner from '../Spinner';

import './ItemList.css';

class ItemList extends Component {
  state = {
    itemList: null
  };

  componentDidMount() {
    const { getData } = this.props;
    getData().then(itemList => {
      this.setState({ itemList });
    });
  }

  renderItems(arr) {
    const { onItemSelected } = this.props;

    return arr.map(item => {
      const { id } = item;
      const label = this.props.children(item);
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
  }

  render() {
    const { itemList } = this.state;

    if (!itemList) {
      return <Spinner />;
    }

    return (
      <ul className='item-list list-group'>{this.renderItems(itemList)}</ul>
    );
  }
}

export default ItemList;
