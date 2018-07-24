import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { SettingsConsumer } from 'composers/SettingsContext';
import Home from '../Home';
import AnimePage from '../AnimePage';

export default () => (
  <Switch>
    <Route
      exact
      path="/"
      render={() => (
        <SettingsConsumer>
          {({ searchQuery, genreFilter }) => (
            <Home searchQuery={searchQuery} genreFilter={genreFilter} />
          )}
        </SettingsConsumer>
      )}
    />
    <Route
      path="/anime/:animeId/:animeName"
      component={AnimePage}
    />
  </Switch>
);
