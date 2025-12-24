import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const routeError = useRouteError();
    console.log(routeError);
    return <h1>An error occurred! Check the console</h1>;
};

export default ErrorPage;
