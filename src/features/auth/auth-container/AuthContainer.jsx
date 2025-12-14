import Card from '../../../components/card/Card.jsx';

/**
 *
 * @param {JSX} children Elements that the component receives as children and are rendered inside the Card component
 */

const AuthContainer = ({ children }) => {
    return (
        <div className="max-width max-height flex-container center">
            <Card className="auth__card flex-container column">{children}</Card>
        </div>
    );
};

export default AuthContainer;
