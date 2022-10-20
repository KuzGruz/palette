import Home from '../pages/Home/Home';
import { RouteProps } from 'react-router/dist/lib/components';
import Palette from '../pages/Palette/Palette';
import NotFound from '../pages/NotFound/NotFound';
import { Navigate } from 'react-router-dom';

export const routes: RouteProps[] = [
    {path: '/', element: <Home/>},
    {path: '/palette', element: <Palette/>},
    {path: '/404', element: <NotFound/>},
    {path: '*', element: <Navigate replace to="/404" />}
];
