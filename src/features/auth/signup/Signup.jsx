import Button from '../../../components/button/Button.jsx';
import Card from '../../../components/card/Card.jsx';
import Input from '../../../components/input/Input.jsx';
import Form from '../form/Form.jsx';
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

    const description = 'Please fill in your details below to create an account with us';

    return (
        <div className="max-width max-height flex-container center">
            <Card className="auth__card flex-container column">
                <Form heading="Signup" description={description}>
                    {fields.map((field) => (
                        <Input key={field.id} {...field} />
                    ))}
                    <Button onClick={(e) => handleSubmit(e)}>Create Account</Button>
                </Form>
            </Card>
        </div>
    );
};

export default Signup;
