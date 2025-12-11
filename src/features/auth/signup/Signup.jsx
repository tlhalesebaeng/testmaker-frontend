import Button from '../../../components/button/Button.jsx';
import Card from '../../../components/card/Card.jsx';
import Input from '../../../components/input/Input.jsx';
import './Signup.css';

const Signup = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const fields = [
        { id: 'signup-field-1', type: 'text', placeholder: 'Enter your username', labelText: 'Username' },
        { id: 'signup-field-2', type: 'email', placeholder: 'example@testmaker.com', labelText: 'Email' },
        { id: 'signup-field-3', type: 'password', placeholder: 'Enter your password', labelText: 'Password' },
    ];

    return (
        <div className="signup flex-container center">
            <Card className="signup__card flex-container column">
                <h2 className="flex-container justify-center">Signup</h2>
                <p className="flex-container justify-center">
                    Please fill in your details below to create an account with us
                </p>
                <form>
                    {fields.map((field) => (
                        <Input key={field.id} {...field} />
                    ))}
                    <Button onClick={(e) => handleSubmit(e)}>Create Account</Button>
                </form>
            </Card>
        </div>
    );
};

export default Signup;
