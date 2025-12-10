import { createBrowserRouter } from 'react-router-dom';
import Signup from '../auth/signup/Signup.jsx';

const router = createBrowserRouter([
    {
        path: '/signup',
        element: <Signup />,
    },
]);

export default router;
