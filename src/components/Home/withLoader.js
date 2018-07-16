import React, { Fragment } from 'react';
import { object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const withLoader = conditionFn => (BaseComponent) => {
  const styles = {
    root: {
      display: 'flex',
      justifyContent: 'center'
    }
  };

  const WithLoader = props => (
    <Fragment>
      <BaseComponent {...props} />
      {
        conditionFn(props) &&
        <div className={props.classes.root}>
          <CircularProgress color="primary" />
        </div>
      }
    </Fragment>
  );

  WithLoader.propTypes = {
    classes: object.isRequired
  };

  return withStyles(styles)(WithLoader);
};

export default withLoader;
