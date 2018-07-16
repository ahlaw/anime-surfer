import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';

import Main from './Main';
import Header from '../Header';

const defaultTheme = createMuiTheme({
  palette: {
    primary: deepPurple
  }
});

export default () => (
  <MuiThemeProvider theme={defaultTheme}>
    <Header />
    <Main />
  </MuiThemeProvider>
);
