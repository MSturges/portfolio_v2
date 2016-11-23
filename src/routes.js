import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './components/app';
import ProfileProjects from './components/profile/profile_projects';
import WebProjectDetails from './components/web_project_details'
import MobileProjectDetails from './components/mobile_project_details'

export default (
  <Route path="/" component={App}>
  <IndexRoute component={ProfileProjects} />
  <Route  path="/web/:Id" component={WebProjectDetails} />
  <Route  path="/mobile/:Id" component={MobileProjectDetails} />
  <Redirect from="*" to="/" />
  </Route>
);
