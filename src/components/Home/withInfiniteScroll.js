import React, { Component } from 'react';
import { func } from 'prop-types';

const withInfiniteScroll = conditionFn => BaseComponent =>
  class WithInfiniteScroll extends Component {
    static propTypes = {
      getNextPage: func.isRequired
    }

    componentDidMount() {
      document.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      document.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
      if (conditionFn(this.props)) {
        this.props.getNextPage();
      }
    }

    render() {
      return <BaseComponent {...this.props} />;
    }
  };

export default withInfiniteScroll;
