import React from 'react';
import { withRouter } from 'react-router-dom';
import { object } from 'prop-types';

import View from './View';

const AnimePage = ({ location }) => (
  <View anime={location.state.anime} />
);

AnimePage.propTypes = {
  location: object.isRequired
};

export default withRouter(AnimePage);
