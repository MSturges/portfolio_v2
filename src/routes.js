import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/app';


export default (
  <Route path="/" component={App}>
  <Redirect from="*" to="/" />
  </Route>
);
