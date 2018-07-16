import React, { Fragment } from 'react';
import { object, string } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LazyLoad from 'react-lazyload';
import GridListTileBar from '@material-ui/core/GridListTileBar';

const styles = {
  titleBar: {
    height: 'auto',
    padding: '12px 0',
    margin: '4px',
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  title: {
    overflow: 'visible',
    whiteSpace: 'normal'
  }
};

const Image = ({ classes, src, title }) => (
  <LazyLoad height={200} once offset={100}>
    {
      src &&
      <Fragment>
        <img
          src={src}
          alt={title}
          style={{ height: '100%', width: '100%' }}
        />
        <GridListTileBar
          classes={{
            root: classes.titleBar,
            title: classes.title
          }}
          title={title}
        />
      </Fragment>
    }
  </LazyLoad>
);

Image.propTypes = {
  classes: object.isRequired,
  src: string.isRequired,
  title: string.isRequired
};

export default withStyles(styles)(Image);
