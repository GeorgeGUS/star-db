import React, { Component } from 'react';

import ErrorBoundary from '../ErrorBoundary';
import Spinner from '../Spinner';

const withData = (View, getData) => {
  return class extends Component {
    state = {
      data: null
    };

    componentDidMount() {
      getData().then(data => {
        this.setState({ data });
      });
    }

    render() {
      const { data } = this.state;

      if (!data) {
        return <Spinner />;
      }

      return (
        <ErrorBoundary>
          <View {...this.props} data={data} />
        </ErrorBoundary>
      );
    }
  };
};

export default withData;
