/* eslint-disable no-undef */
/* eslint-disable react/no-danger */

import React from 'react';
import { render } from 'react-dom';
import Layout from '../components/Layout/Layout';
import md from './index.md';

const App = () => (
  <Layout title={md.title} link={md.link} >
    <div dangerouslySetInnerHTML={{ __html: md.html }} />
  </Layout>
);

render((<App />), document.getElementById('app'));

// Enable Hot Module Replacement (HMR)
if (module.hot) {
  module.hot.accept();
}
