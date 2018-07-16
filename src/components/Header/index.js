import React, { Component, Fragment } from 'react';
import ActionBar from './ActionBar';
import SideBar from './SideBar';

export default class extends Component {
  state = {
    isOpen: false
  };

  toggleDrawer = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render() {
    return (
      <Fragment>
        <ActionBar toggleDrawer={this.toggleDrawer} />
        <SideBar isOpen={this.state.isOpen} toggleDrawer={this.toggleDrawer} />
      </Fragment>
    );
  }
}
