import React, { Fragment } from 'react';
import { object, func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const styles = {
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const DefaultToolbar = ({
  classes,
  toggleDrawer,
  toggleSearch
}) => (
  <Fragment>
    <IconButton
      className={classes.menuButton}
      color="inherit"
      aria-label="Menu"
      onClick={toggleDrawer}
    >
      <MenuIcon />
    </IconButton>
    <Typography
      variant="title"
      color="inherit"
      className={classes.flex}
      noWrap
    >
      Anime Surfer
    </Typography>
    <IconButton
      color="inherit"
      aria-label="Search"
      onClick={toggleSearch}
    >
      <SearchIcon />
    </IconButton>
  </Fragment>
);

DefaultToolbar.propTypes = {
  classes: object.isRequired,
  toggleDrawer: func.isRequired,
  toggleSearch: func.isRequired
};

export default withStyles(styles)(DefaultToolbar);
