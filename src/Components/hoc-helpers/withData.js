import React, { Component } from 'react';

import ErrorBoundary from '../ErrorBoundary';
import Spinner from '../Spinner';

const withData = View => {
  return class extends Component {
    state = {
      data: null
    };

    componentDidUpdate(prevProps) {
      if (prevProps.getData !== this.props.getData) {
        this.update();
      }
    }

    update() {
      this.props.getData().then(data => {
        this.setState({ data });
      });
    }

    componentDidMount() {
      this.update();
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
