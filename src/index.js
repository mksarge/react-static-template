/* eslint-disable no-undef */

import React from 'react';
import { render } from 'react-dom';
import App from './App';

render((<App />), document.getElementById('app'));

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept();
}
