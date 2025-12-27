import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFetch } from '../../../hooks/useFetch.js';

import Button from '../../../components/button/Button';
import Input from '../../../components/input/Input.jsx';
import AuthQuestion from '../auth-question/AuthQuestion';
import Form from '../form/Form.jsx';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ username: '' }); // Email input field data
    const { isLoading, fetch } = useFetch();

    const handleSendCode = async (event) => {
        event.preventDefault();
        const response = await fetch('/auth/password/reset', 'post', data);
        if (response) navigate('/auth/confirm/code');
    };

    const handleChange = (event, name) => {
        setData((prevData) => {
            const newData = { ...prevData };
            newData[name] = event.target.value;
            return newData;
        });
    };

    let disableBtn = false; // Disables the send code button
    if (!data.username) disableBtn = true;

    const fieldProps = {
        type: 'username',
        placeholder: 'Enter your username',
        labelText: 'Username',
        onChange: (e) => handleChange(e, 'username'),
    };

    const description = 'Please enter your username to reset your password';

    return (
        <>
            <Form heading="Forgot Password?" description={description}>
                <Input {...fieldProps} />
                <Button loading={isLoading} disabled={disableBtn} onClick={handleSendCode}>
                    Send Code
                </Button>
            </Form>
            <AuthQuestion onClick={() => navigate('/auth/login')} linkText="Login">
                Remember your password?
            </AuthQuestion>
        </>
    );
};

export default ForgotPassword;
