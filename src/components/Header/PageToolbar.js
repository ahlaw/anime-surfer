import React, { Fragment } from 'react';
import { object, func } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const styles = {
  flex: {
    flex: 1
  },
  backButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const PageToolbar = ({ classes, anime, goBack }) => (
  <Fragment>
    <IconButton
      className={classes.backButton}
      color="inherit"
      aria-label="Back"
      onClick={goBack}
    >
      <ArrowBackIcon />
    </IconButton>
    <Typography
      variant="title"
      color="inherit"
      className={classes.flex}
      noWrap
    >
      {anime.attributes.canonicalTitle}
    </Typography>
  </Fragment>
);

PageToolbar.propTypes = {
  classes: object.isRequired,
  anime: object.isRequired,
  goBack: func.isRequired
};

export default withStyles(styles)(PageToolbar);
