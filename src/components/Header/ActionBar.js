import React, { Component } from 'react';
import { func } from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { SettingsConsumer } from 'composers/SettingsContext';

import DefaultToolbar from './DefaultToolbar';
import SearchToolbar from './SearchToolbar';

class ActionBar extends Component {
  static propTypes = {
    toggleDrawer: func.isRequired
  };

  state = {
    search: false
  };

  toggleSearch = () => {
    this.setState(prevState => ({ search: !prevState.search }));
  };

  render() {
    const { toggleDrawer } = this.props;
    return (
      <AppBar position="sticky">
        <Toolbar>
          {
            !this.state.search ?
              <DefaultToolbar toggleDrawer={toggleDrawer} toggleSearch={this.toggleSearch} /> :
              <SettingsConsumer>
                {({ clearSearch, handleSearch }) => (
                  <SearchToolbar
                    toggleSearch={this.toggleSearch}
                    clearSearch={clearSearch}
                    handleSearch={handleSearch}
                  />
                )}
              </SettingsConsumer>
          }
        </Toolbar>
      </AppBar>
    );
  }
}

export default ActionBar;
