import { RouterProvider } from 'react-router-dom';
import router from './RoutesConfig.jsx';

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
