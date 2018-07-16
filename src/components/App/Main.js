import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SettingsConsumer } from 'composers/SettingsContext';
import Home from '../Home';

export default () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <SettingsConsumer>
          {({ searchQuery }) => (
            <Home searchQuery={searchQuery} />
          )}
        </SettingsConsumer>
      )}
    />
  </Switch>
);
