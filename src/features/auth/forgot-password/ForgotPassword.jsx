import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input.jsx';
import AuthQuestion from '../auth-question/AuthQuestion';
import Form from '../form/Form.jsx';
import AuthContainer from '../auth-container/AuthContainer.jsx';
import isValidEmail from '../../../utils/validEmail.js';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ email: '' }); // Email input field data

    const handleSendCode = (event) => {
        event.preventDefault();
        navigate('/password/reset/code');
    };

    const handleChange = (event, name) => {
        setData((prevData) => {
            const newData = { ...prevData };
            newData[name] = event.target.value;
            return newData;
        });
    };

    let disableBtn = false; // Disables the send code button
    if (!data.email || !isValidEmail(data.email)) disableBtn = true;

    const fieldProps = {
        type: 'email',
        placeholder: 'Enter your email',
        labelText: 'Email',
        onChange: (e) => handleChange(e, 'email'),
    };

    const description = 'Please enter your email address to reset your password';

    return (
        <AuthContainer>
            <Form heading="Forgot Password?" description={description}>
                <Input {...fieldProps} />
                <Button disabled={disableBtn} onClick={handleSendCode}>
                    Send Code
                </Button>
            </Form>
            <AuthQuestion onClick={() => navigate('/login')} linkText="Login">
                Remember your password?
            </AuthQuestion>
        </AuthContainer>
    );
};

export default ForgotPassword;
