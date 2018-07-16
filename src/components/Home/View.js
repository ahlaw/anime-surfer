import React from 'react';
import { compose } from 'recompose';
import { array, object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import withErrorHandler from './withErrorHandler';
import withInfiniteScroll from './withInfiniteScroll';
import withLoader from './withLoader';
import Image from './Image';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit
  },
  gridListTile: {
    position: 'relative'
  }
});

const errorHandlerCondition = props =>
  !props.isLoading && props.isError;

const infiniteScrollCondition = (props) => {
  const { body } = document;
  const html = document.documentElement;
  const documentHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight);
  return (
    (window.innerHeight + window.scrollY) >= (documentHeight - 400) &&
    props.hits.length &&
    !props.isLoading &&
    !props.isError
  );
};

const loadingCondition = props =>
  props.isLoading;

const View = ({ classes, hits }) => (
  <div className={classes.root}>
    <Grid container spacing={8}>
      {hits.map(anime => (
        <Grid
          className={classes.gridListTile}
          key={anime.id}
          justify="center"
          xs={6}
          sm={4}
          md={3}
          lg={2}
          xl={1}
          container
          item
        >
          <Image
            src={anime.attributes.posterImage.medium}
            title={anime.attributes.canonicalTitle}
          />
        </Grid>
      ))}
    </Grid>
  </div>
);

View.propTypes = {
  classes: object.isRequired,
  hits: array.isRequired
};

export default compose(
  withErrorHandler(errorHandlerCondition),
  withInfiniteScroll(infiniteScrollCondition),
  withLoader(loadingCondition),
  withStyles(styles),
)(View);
