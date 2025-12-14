import { createBrowserRouter } from 'react-router-dom';

import Signup from '../auth/signup/Signup.jsx';
import RootLayout from './RootLayout.jsx';
import ErrorPage from '../errors/ErrorPage.jsx';
import Login from '../auth/login/Login.jsx';
import ForgotPassword from '../auth/forgot-password/ForgotPassword.jsx';
import Home from '../home/Home.jsx';
import ConfirmCode from '../auth/confirm-code/ConfirmCode.jsx';
import ChangePassword from '../auth/change-password/ChangePassword.jsx';

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
            {
                path: 'password/reset',
                element: <ForgotPassword />,
            },
            {
                path: 'confirm/code',
                element: <ConfirmCode />,
            },
            {
                path: 'password/reset/:code/new',
                element: <ChangePassword />,
            },
            {
                path: 'home',
                element: <Home />,
            },
        ],
    },
]);

export default router;
