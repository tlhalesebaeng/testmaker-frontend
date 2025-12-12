import { createBrowserRouter } from 'react-router-dom';
import Signup from '../auth/signup/Signup.jsx';
import RootLayout from './RootLayout.jsx';
import ErrorPage from '../errors/ErrorPage.jsx';
import Login from '../auth/login/Login.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'signup',
                element: <Signup />,
            },
            {
                path: 'login',
                element: <Login />,
            },
        ],
    },
]);

export default router;
