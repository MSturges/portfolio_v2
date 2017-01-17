import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './components/app';
import ProfileProjects from './components/projects/projects_section';
import WebProjectDetails from './components/projects/details/web_project_details'
import MobileProjectDetails from './components/projects/details/mobile_project_details'

export default (
  <Route path="/" component={App}>
  <IndexRoute component={ProfileProjects} />
  <Route  path="/web/:Id" component={WebProjectDetails} />
  <Route  path="/mobile/:Id" component={MobileProjectDetails} />
  <Redirect from="*" to="/" />
  </Route>
);
