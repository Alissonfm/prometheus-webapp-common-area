import _map from 'lodash/map';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Profile, Requests, Activities, ActivityCreator } from '../pages';

const ROUTES = [
  {
    path: '/student',
    Component: () => (<div>Student</div>),
  },
  {
    path: '/educator',
    Component: () => (<div>Educator</div>),
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
];

const buildRouterTree = (routes, props) => {
  return _map(routes, ({ path, Component }) => <Route key={`${Math.random()}-${path}`} path={path}><Component {...props} /></Route>);
}

const RouterTree = (props) => (
  <Switch>
    <Route exact path="/"><div>Dashboard</div></Route>
    {buildRouterTree(ROUTES, props)}
  </Switch>
);

export default RouterTree;
