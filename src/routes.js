import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './components/app';
import ProfileProjects from './components/profile/profile_projects';
import ProjectDetails from './components/project_details'

export default (
  <Route path="/" component={App}>
  <IndexRoute component={ProfileProjects} />
  <Route  path="/project/:Id" component={ProjectDetails} />
  <Redirect from="*" to="/" />
  </Route>
);
