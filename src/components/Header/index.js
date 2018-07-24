import React, { Component, Fragment } from 'react';

import { SettingsConsumer } from 'composers/SettingsContext';

import ActionBar from './ActionBar';
import SideBar from './SideBar';
import MenuItems from './MenuItems';
import FilterItems from './FilterItems';

export default class extends Component {
  state = {
    nav: false,
    filter: false
  };

  toggleDrawer = menu => () => {
    this.setState(prevState => ({ [menu]: !prevState[menu] }));
  };

  render() {
    return (
      <Fragment>
        <ActionBar toggleDrawer={this.toggleDrawer} />
        <SideBar
          side="left"
          isOpen={this.state.nav}
          toggleDrawer={this.toggleDrawer('nav')}
        >
          <MenuItems />
        </SideBar>
        <SideBar
          side="right"
          isOpen={this.state.filter}
          toggleDrawer={this.toggleDrawer('filter')}
        >
          <SettingsConsumer>
            {({ genreFilter, toggleCheckbox }) => (
              <FilterItems genreFilter={genreFilter} toggleCheckbox={toggleCheckbox} />
            )}
          </SettingsConsumer>
        </SideBar>

      </Fragment>
    );
  }
}
