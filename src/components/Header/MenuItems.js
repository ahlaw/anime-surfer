import React from 'react';
import { object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';

const styles = theme => ({
  root: {
    width: 200,
    backgroundColor: theme.palette.background.paper
  }
});

const MenuItems = ({ classes }) => (
  <div className={classes.root}>
    <List>
      <ListItem component={Link} to="/" button>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </List>
  </div>
);

MenuItems.propTypes = {
  classes: object.isRequired
};

export default withStyles(styles)(MenuItems);
