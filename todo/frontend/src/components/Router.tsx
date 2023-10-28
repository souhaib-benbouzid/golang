import {
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom';
import { LOCATION } from '../contants';
import Dashboard from '../pages/Dashboard';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Registration from '../pages/Registration';
import NotFound from './NotFound';

const routes: RouteObject[] = [
  {
    path: LOCATION.home,
    element: <Home />,
  },
  {
    path: LOCATION.registration,
    element: <Registration />,
  },
  {
    path: LOCATION.login,
    element: <Login />,
  },
  {
    path: LOCATION.dashboard,
    element: <Dashboard />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
];

const router = createBrowserRouter(routes);

export const Router = () => {
  return <RouterProvider router={router} />;
};
