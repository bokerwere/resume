import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import path from './path';
import Dashboard from '../pages/Dashboard';
import PageNotFound from '../pages/PageNotFound';

const Routes = () => (
  <Router>
    <Switch>
      <Route path={path.root} exact component={Dashboard} />
      <Route component={PageNotFound} />
    </Switch>
  </Router>
);

export default Routes;
