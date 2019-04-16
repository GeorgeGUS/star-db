import React, { Component } from 'react';

import ErrorBoundary from '../ErrorBoundary';
import Spinner from '../Spinner';

import './ItemDetails.css';

const Record = ({ item, field, label }) => {
  return (
    <tr>
      <td>{label}</td>
      <td>{item[field]}</td>
    </tr>
  );
};

export { Record };
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
    const { children } = this.props;

    if (!item) {
      return (
        <div className='details card'>
          <span>Select an item from a list</span>
        </div>
      );
    }

    const itemView = (
      <>
        <img
          className='details-image'
          alt={item.name}
          width='400'
          height='550'
          src={image}
        />
        <div className='card-body'>
          <h3 className='subtitle'>{item.name}</h3>
          <table className='table'>
            <tbody>
              {React.Children.map(children, child => {
                return React.cloneElement(child, { item });
              })}
            </tbody>
          </table>
        </div>
      </>
    );

    const itemData = loading ? <Spinner /> : itemView;

    return (
      <div className='details card'>
        <ErrorBoundary>{itemData}</ErrorBoundary>
      </div>
    );
  }
}

export default ItemDetails;
