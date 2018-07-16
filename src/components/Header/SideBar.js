import React from 'react';
import { bool, func } from 'prop-types';
import Drawer from '@material-ui/core/Drawer';

import MenuItems from './MenuItems';

const Sidebar = ({ isOpen, toggleDrawer }) => (
  <Drawer open={isOpen} onClose={toggleDrawer}>
    <div
      tabIndex={0}
      role="button"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <MenuItems />
    </div>
  </Drawer>
);

Sidebar.propTypes = {
  isOpen: bool.isRequired,
  toggleDrawer: func.isRequired
};

export default Sidebar;
