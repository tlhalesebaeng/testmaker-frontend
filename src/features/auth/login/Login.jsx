import Card from '../../../components/card/Card.jsx';
import Input from '../../../components/input/Input.jsx';
import Form from '../form/Form.jsx';

const Login = () => {
    const fields = [
        {
            id: 'f-1',
            type: 'text',
            placeholder: 'Enter your username',
            labelText: 'Username',
        },
        {
            id: 'f-2',
            type: 'password',
            placeholder: 'Enter your password',
            labelText: 'Password',
        },
    ];

    const description = 'Please fill in your details below to access your account';

    return (
        <div className="max-width max-height flex-container center">
            <Card className="auth__card flex-container column">
                <Form heading="Login" description={description}>
                    {fields.map((field) => (
                        <Input key={field.id} {...field} />
                    ))}
                </Form>
            </Card>
        </div>
    );
};

export default Login;
