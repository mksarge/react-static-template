/* eslint-disable no-undef */

import React from 'react';
import { render } from 'react-dom';
import Header from './modules/Header';
import Content from './modules/Content';
import Footer from './modules/Footer';

const App = () => (
  <div>
    <Header />
    <Content />
    <Footer />
  </div>
);

render((<App />), document.getElementById('app'));

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept();
}
