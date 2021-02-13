import Home from './app/pages/Home/Home';
import Docs from './app/pages/Docs/Docs';

const routesArray = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/docs',
    exact: true,
    component: Docs,
  },
];

const routes = (Route: any, r: Function) =>
  routesArray.map((route, key: number) =>
    r(Route, Object.assign(route, { key }))
  );

export default routes;
