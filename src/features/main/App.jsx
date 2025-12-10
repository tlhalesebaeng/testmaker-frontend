import { RouterProvider } from 'react-router-dom';
import router from './RoutesConfig.jsx';
import './App.css';

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
