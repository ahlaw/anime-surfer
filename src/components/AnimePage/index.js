import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';

import View from './View';

/*
const AnimePage = ({ location }) => (
  <View anime={location.state.anime} />
);
*/

class AnimePage extends Component {
  static propTypes = {
    location: object.isRequired
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    const { location } = this.props;
    return <View anime={location.state.anime} />;
  }
}

export default withRouter(AnimePage);
