import React, { Component } from 'react';

import SwapiService from '../../Services/SwapiService';

import './ItemList.css';

class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peopleList: []
  };

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({ peopleList });
      });
  }

  render() {
    const { peopleList } = this.state;
    const { onItemSelected } = this.props;

    return (
      <ul className="item-list list-group">
        {peopleList.map(({ id, name }) => {
          return (
            <li
              key={id}
              className="list-group-item list-group-item-action"
              onClick={() => onItemSelected(id)}>
              {name}
            </li>
          )
        })}
      </ul>
    );
  }
}

export default ItemList;