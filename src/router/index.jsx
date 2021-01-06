import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import _map from 'lodash/map';
import { Activities, ActivityCreator, Dashboard, Profile, Launcher, Learning, Requests } from '../pages';

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
  },
  {
    path: '/learning',
    Component: Learning,
  }
];

const buildRouterTree = (routes, props) => {
  return _map(routes, ({ path, exact, Component }) => <Route key={uuidv4()} path={path} exact={exact}><Component {...props} /></Route>);
}

const Component = (props) => (<Switch>
  {buildRouterTree(ROUTES, props)}
</Switch>
);
const RouterTree = (props) => React.useMemo(() => <Component {...props} />, [props]);

export default RouterTree;
