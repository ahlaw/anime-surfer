import React, { Fragment } from 'react';
import { func } from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const withErrorHandler = conditionFn => (BaseComponent) => {
  const WithErrorHandler = props => (
    <Fragment>
      <BaseComponent {...props} />
      {
        conditionFn(props) &&
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="body1" align="center">Something went wrong</Typography>
          <Button color="primary" onClick={props.getNextPage}>
            TRY AGAIN
          </Button>
        </div>
      }
    </Fragment>
  );

  WithErrorHandler.propTypes = {
    getNextPage: func.isRequired
  };

  return WithErrorHandler;
};

export default withErrorHandler;
