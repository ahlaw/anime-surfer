import React from 'react';
import { func, object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import { genres } from 'store';

import CollapsibleItem from './CollapsibleItem';

const styles = theme => ({
  root: {
    width: 200,
    backgroundColor: theme.palette.background.paper
  }
});

const FilterItems = ({ classes, genreFilter, toggleCheckbox }) => (
  <div className={classes.root}>
    <List>
      <CollapsibleItem label="Genres">
        <List component="div" disablePadding>
          {genres.map(genre => (
            <ListItem
              key={genre.slug}
              button
              onClick={toggleCheckbox(genre.slug)}
            >
              <Checkbox
                checked={genreFilter.has(genre.slug)}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={genre.name} />
            </ListItem>
          ))}
        </List>
      </CollapsibleItem>
    </List>
  </div>
);

FilterItems.propTypes = {
  classes: object.isRequired,
  genreFilter: object.isRequired,
  toggleCheckbox: func.isRequired
};

export default withStyles(styles)(FilterItems);
