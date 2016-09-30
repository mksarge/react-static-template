import React from 'react'
import { render } from 'react-dom'
import App from './modules/App'
require('../public/index.css')

render((
  <App />
), document.getElementById('app'))
