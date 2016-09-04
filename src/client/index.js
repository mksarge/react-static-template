import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory} from 'react-router'

import App from './modules/App'
import Content from './modules/Content'
require("./public/index.css");

render((
  <Router history={browserHistory}>
    <Route path="/" component={App} >
      <IndexRoute component={Content} />
    </Route>
  </Router>
), document.getElementById('app'))