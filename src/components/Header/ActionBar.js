import React, { Component } from 'react';
import { func, object } from 'prop-types';
import { withRouter } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import FilterListIcon from '@material-ui/icons/FilterList';

import { SettingsConsumer } from 'composers/SettingsContext';

import DefaultToolbar from './DefaultToolbar';
import SearchToolbar from './SearchToolbar';
import PageToolbar from './PageToolbar';

class ActionBar extends Component {
  static propTypes = {
    location: object.isRequired,
    history: object.isRequired,
    toggleDrawer: func.isRequired
  };

  state = {
    search: false
  };

  getCurrentToolbar = () => {
    const { location } = this.props;
    if (location.pathname === '/') {
      return !this.state.search ? 'default' : 'search';
    }
    return 'page';
  };

  toggleSearch = () => {
    this.setState(prevState => ({ search: !prevState.search }));
  };

  render() {
    const { location, history, toggleDrawer } = this.props;
    const filterList = (
      <IconButton
        color="inherit"
        aria-label="FilterList"
        onClick={toggleDrawer('filter')}
      >
        <FilterListIcon />
      </IconButton>
    );

    let toolbar;
    switch (this.getCurrentToolbar()) {
      case 'search':
        toolbar = (
          <SettingsConsumer>
            {({ clearSearch, handleSearch }) => (
              <SearchToolbar
                toggleSearch={this.toggleSearch}
                clearSearch={clearSearch}
                handleSearch={handleSearch}
              />
            )}
          </SettingsConsumer>
        );
        break;
      case 'page':
        toolbar = (
          <PageToolbar
            goBack={history.goBack}
            anime={location.state.anime}
          />
        );
        break;
      default:
        toolbar = (
          <DefaultToolbar
            toggleDrawer={toggleDrawer('nav')}
            toggleSearch={this.toggleSearch}
          />
        );
    }

    return (
      <AppBar position="sticky">
        <Toolbar>
          {toolbar}
          {this.getCurrentToolbar() !== 'page' ? filterList : null}
        </Toolbar>
      </AppBar>
    );
  }
}

export default withRouter(ActionBar);
