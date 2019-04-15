import React, { Component } from 'react';
import './ItemList.css';

class ItemList extends Component {
  render() {
    return (
      <ul className="item-list list-group">
        <li className="list-group-item list-group-item-action">Luke Skywalker</li>
        <li className="list-group-item list-group-item-action">Darth Vader</li>
        <li className="list-group-item list-group-item-action">R2-D2</li>
      </ul>
    );
  }
}

export default ItemList;