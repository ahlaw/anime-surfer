import React from 'react';
import { bool, func, object, string } from 'prop-types';
import Drawer from '@material-ui/core/Drawer';

const Sidebar = ({
  children,
  side,
  isOpen,
  toggleDrawer
}) => (
  <Drawer anchor={side} open={isOpen} onClose={toggleDrawer}>
    <div
      tabIndex={0}
      role="button"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      {children}
    </div>
  </Drawer>
);

Sidebar.propTypes = {
  children: object.isRequired,
  side: string.isRequired,
  isOpen: bool.isRequired,
  toggleDrawer: func.isRequired
};

export default Sidebar;
