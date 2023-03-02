import { createBrowserRouter } from 'react-router-dom';
import Admins from './pages/Admins';
import Home from './pages/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/admins',
        element: <Admins />
    }
]);

export default router;