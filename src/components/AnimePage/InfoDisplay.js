import React from 'react';
import PropTypes, { number, string } from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const InfoDisplay = ({ label, data }) => (
  <Grid container alignItems="center" spacing={8}>
    <Grid item>
      <Typography variant="body2">{label}</Typography>
    </Grid>
    <Grid item>
      <Typography variant="body1">{data}</Typography>
    </Grid>
  </Grid>
);

InfoDisplay.propTypes = {
  label: string,
  data: PropTypes.oneOfType([
    string,
    number
  ])
};

export default InfoDisplay;
