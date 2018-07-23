import React from 'react';
import { object, string } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import withWidth, { isWidthUp } from '@material-ui/core/withWidth';

import InfoDisplay from './InfoDisplay';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up('md')]: {
      padding: `${theme.spacing.unit * 4}px ${theme.spacing.unit * 16}px`
    },
    [theme.breakpoints.up('lg')]: {
      padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 32}px`
    }
  },
  card: {
    maxWidth: '400px',
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing.unit * 4
    },
    [theme.breakpoints.up('md')]: {
      marginRight: theme.spacing.unit * 8
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: theme.spacing.unit * 16
    }
  },
  image: {
    height: 0,
    paddingTop: '142.857%' // 7:10
  }
});

const View = ({ classes, width, anime }) => {
  const synopsis = (
    <Grid item xs={12}>
      <Typography variant="body2">Synopsis</Typography>
      <Typography variant="body1">{anime.attributes.synopsis}</Typography>
    </Grid>
  );
  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid
          item
          xs={4}
          sm={6}
        >
          <Card className={classes.card}>
            <CardMedia
              className={classes.image}
              image={anime.attributes.posterImage.medium}
              title={anime.attributes.canonicalTitle}
            />
          </Card>
        </Grid>
        <Grid
          container
          item
          direction="column"
          spacing={16}
          xs={8}
          sm={6}
        >
          <Grid item>
            <Typography variant="headline" gutterBottom>{anime.attributes.canonicalTitle}</Typography>
            <InfoDisplay label="Rating" data={anime.attributes.averageRating} />
            <InfoDisplay label="Episodes" data={anime.attributes.episodeLength} />
            <InfoDisplay label="Status" data={anime.attributes.status} />
          </Grid>
          <Grid item>{isWidthUp('sm', width) ? synopsis : null}</Grid>
        </Grid>
        {isWidthUp('sm', width) ? null : synopsis}
      </Grid>
    </div>
  );
};

View.propTypes = {
  classes: object.isRequired,
  width: string.isRequired,
  anime: object.isRequired
};

export default withWidth()(withStyles(styles)(View));
