import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import _map from 'lodash/map';
import { Activities, ActivityCreator, Dashboard, Profile, Launcher, Requests } from '../pages';

const ROUTES = [
  {
    path: '/',
    exact: true,
    Component: Dashboard,
  },
  {
    path: '/profile',
    Component: Profile,
  },
  {
    path: '/requests',
    Component: Requests,
  },
  {
    path: '/activities',
    Component: Activities,
  },
  {
    path: '/new-activity',
    Component: ActivityCreator,
  },
  {
    path: '/launcher',
    Component: Launcher,
  }
];

const buildRouterTree = (routes, props) => {
  return _map(routes, ({ path, exact, Component }) => <Route key={uuidv4()} path={path} exact={exact}><Component {...props} /></Route>);
}

const RouterTree = (props) => (
  <Switch>
    {buildRouterTree(ROUTES, props)}
  </Switch>
);

export default RouterTree;
