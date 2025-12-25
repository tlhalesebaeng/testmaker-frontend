import { Outlet } from 'react-router-dom';
import Card from '../../../components/card/Card.jsx';

const AuthContainer = () => {
    return (
        <div className="max-width max-height flex-container center">
            <Card className="auth__card flex-container column">
                <Outlet />
            </Card>
        </div>
    );
};

export default AuthContainer;
