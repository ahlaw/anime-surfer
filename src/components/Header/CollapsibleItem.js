import React, { Component, Fragment } from 'react';
import { object, string } from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

class CollapsibleItem extends Component {
  static propTypes = {
    children: object.isRequired,
    label: string.isRequired
  };

  state = {
    open: false
  };

  handleClick = (e) => {
    e.stopPropagation();
    this.setState(state => ({ open: !state.open }));
  };

  render() {
    const { children, label } = this.props;

    return (
      <Fragment>
        <ListItem button onClick={this.handleClick}>
          <ListItemText primary={label} />
          {this.state.open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      </Fragment>
    );
  }
}

export default CollapsibleItem;
