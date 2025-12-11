import Card from '../../../components/card/Card.jsx';
import './Signup.css';

const Signup = () => {
    return (
        <div className="signup flex-container center">
            <Card className="signup__card flex-container column">
                <h2 className="flex-container justify-center">Signup</h2>
                <p className="flex-container justify-center">
                    Please fill in your details below to create an account with us
                </p>
            </Card>
        </div>
    );
};

export default Signup;
