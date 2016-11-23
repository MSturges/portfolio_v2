import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import App from './components/app';
import ProfileIndex  from './components/components_profile/profile_index';
// import SlideIndex  from './components/components_slide/slide_index';

export default (
  <Route path="/" component={App}>
  <IndexRoute component={ProfileIndex} />
  <Redirect from="*" to="/" />
  </Route>
);
