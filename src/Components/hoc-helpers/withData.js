import React, { Component } from 'react';

import ErrorBoundary from '../ErrorBoundary';
import Spinner from '../Spinner';

const withData = View => {
  return class extends Component {
    state = {
      data: null
    };

    componentDidMount() {
      this.props.getData().then(data => {
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
