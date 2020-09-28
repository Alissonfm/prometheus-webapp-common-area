import _map from 'lodash/map';
import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

const ROUTES = [
  {
    path: '/student',
    component: () => (<div>Student</div>),
  },
  {
    path: '/educator',
    component: () => (<div>Educator</div>),
  },
  {
    path: '/profile',
    component: () => (<div>Perfil</div>),
  },
  {
    path: '/requests',
    component: () => (<div>Solicitações</div>),
  },
  {
    path: '/activities',
    component: () => (<div>Atividades</div>),
  },
];

const buildRouterTree = (routes) => {
  return _map(routes, ({ path, component }) => <Route key={`${Math.random()}-${path}`} path={path}>{component}</Route>);
}

const RouterTree = () => (
  <Switch>
    <Route exact path="/"><div>Dashboard</div></Route>
    {buildRouterTree(ROUTES)}
  </Switch>
);

export default RouterTree;
