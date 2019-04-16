import React, { Component } from 'react';

import ErrorBoundary from '../ErrorBoundary';
import Spinner from '../Spinner';

import './ItemDetails.css';

class ItemDetails extends Component {
  state = {
    item: null,
    image: null,
    loading: false
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.itemId !== this.props.itemId) {
      this.updateItem();
    }
  }

  updateItem() {
    const { itemId, getData, getImageUrl } = this.props;
    if (!itemId) return;

    this.setState({
      loading: true
    });

    getData(itemId)
      .then(item => {
        this.setState({
          item,
          image: getImageUrl(item),
          loading: false
        });
      })
      .catch(this.onError);
  }

  render() {
    const { item, image, loading } = this.state;
    const viewProps = { item, image };
    if (!item) {
      return (
        <div className='details card'>
          <span>Select an item from a list</span>
        </div>
      );
    }

    const itemData = loading ? <Spinner /> : <ItemView {...viewProps} />;

    return (
      <div className='details card'>
        <ErrorBoundary>{itemData}</ErrorBoundary>
      </div>
    );
  }
}

const ItemView = ({ item: { name, gender, birthYear, eyeColor }, image }) => {
  return (
    <>
      <img
        className='details-image'
        alt={name}
        width='400'
        height='550'
        src={image}
      />
      <div className='card-body'>
        <h3 className='subtitle'>{name}</h3>
        <table className='table'>
          <tbody>
            <tr>
              <td>Gender</td>
              <td>{gender}</td>
            </tr>
            <tr>
              <td>Birth Year</td>
              <td>{birthYear}</td>
            </tr>
            <tr>
              <td>Eye Color</td>
              <td>{eyeColor}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ItemDetails;
