import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../components/button/Button.jsx';
import Card from '../../../components/card/Card.jsx';
import Input from '../../../components/input/Input.jsx';
import AuthQuestion from '../auth-question/AuthQuestion.jsx';
import Form from '../form/Form.jsx';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ username: '', password: '' }); // Input field data

    const handleSubmit = (event) => event.preventDefault();

    const handleChange = (event, name) => {
        setData((prevData) => {
            const newData = { ...prevData };
            newData[name] = event.target.value;
            return newData;
        });
    };

    let disableBtn = false; // Disables the submit button
    if (!data.username || !data.password) disableBtn = true;

    const fields = [
        {
            id: 'f-1',
            type: 'text',
            placeholder: 'Enter your username',
            labelText: 'Username',
            onChange: (e) => handleChange(e, 'username'),
        },
        {
            id: 'f-2',
            type: 'password',
            placeholder: 'Enter your password',
            labelText: 'Password',
            onChange: (e) => handleChange(e, 'password'),
        },
    ];

    const description = 'Please fill in your details below to access your account';

    return (
        <div className="max-width max-height flex-container center">
            <Card className="auth__card flex-container column">
                <Form heading="Welcome Back" description={description}>
                    {fields.map((field) => (
                        <Input key={field.id} {...field} />
                    ))}
                    <a className="flex-container forgot-password" onClick={() => navigate('/password/reset')}>
                        Forgot Password
                    </a>
                    <Button disabled={disableBtn} onClick={(e) => handleSubmit(e)}>
                        Login
                    </Button>
                </Form>
                <AuthQuestion onClick={() => navigate('/signup')} linkText="Signup">
                    Don't have an account?
                </AuthQuestion>
            </Card>
        </div>
    );
};

export default Login;
