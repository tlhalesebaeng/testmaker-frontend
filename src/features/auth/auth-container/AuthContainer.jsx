import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Card from '../../../components/card/Card.jsx';

const AuthContainer = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);

    if (isAuth) return <Navigate to="/home" />;

    return (
        <div className="max-width max-height flex-container center">
            <Card className="auth__card flex-container column">
                <Outlet />
            </Card>
        </div>
    );
};

export default AuthContainer;
