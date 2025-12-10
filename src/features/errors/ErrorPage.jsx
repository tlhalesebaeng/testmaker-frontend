import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const routeError = useRouteError();
    return <h1>{routeError.error.message}</h1>;
};

export default ErrorPage;
