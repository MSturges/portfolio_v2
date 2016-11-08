import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import ProfileIndex  from './components/profile_index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProfileIndex} />
  </Route>
);

// <Route path="joke/new" component={JokeNew} />
