import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import { SettingsProvider } from 'composers/SettingsContext';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

render(
  <Router>
    <SettingsProvider>
      <CssBaseline />
      <App />
    </SettingsProvider>
  </Router>
  , document.getElementById('root')
);
registerServiceWorker();
