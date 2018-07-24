import React, { Fragment } from 'react';
import { object, func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = theme => ({
  backButton: {
    marginLeft: -12,
    marginRight: 20
  },
  searchField: {
    color: theme.palette.common.white
  },
  input: {
    width: '100%'
  }
});

const SearchToolbar = ({
  classes,
  toggleSearch,
  handleSearch,
  clearSearch
}) => {
  const cancelSearch = () => {
    clearSearch();
    toggleSearch();
  };
  return (
    <Fragment>
      <IconButton
        className={classes.backButton}
        color="inherit"
        aria-label="Back"
        onClick={cancelSearch}
      >
        <ArrowBackIcon />
      </IconButton>
      <Input
        classes={{
          root: classes.searchField,
          input: classes.input
        }}
        id="search"
        type="search"
        placeholder="Search..."
        onChange={handleSearch}
        disableUnderline
        fullWidth
        autoFocus
      />
    </Fragment>
  );
};

SearchToolbar.propTypes = {
  classes: object.isRequired,
  toggleSearch: func.isRequired,
  handleSearch: func.isRequired,
  clearSearch: func.isRequired
};

export default withStyles(styles)(SearchToolbar);
