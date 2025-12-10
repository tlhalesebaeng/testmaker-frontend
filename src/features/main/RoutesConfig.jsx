import { createBrowserRouter } from 'react-router-dom';
import Signup from '../auth/signup/Signup.jsx';
import RootLayout from './RootLayout.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: 'signup',
                element: <Signup />,
            },
        ],
    },
]);

export default router;
