import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from 'browserHistory';
import React from 'react';
import Project from 'Project';

function PageNotFound() {
  return <h2>Page not found 404</h2>;
}

function Routes() {
  return (
    <Router history={history}>
      <Switch>
        <Redirect exact from="/" to="/project" />
        <Route path="/project" component={Project} />
        <Route component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
