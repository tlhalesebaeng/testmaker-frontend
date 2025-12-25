import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useFetch } from '../../../hooks/useFetch.js';

import isValidEmail from '../../../utils/validEmail.js';
import AuthQuestion from '../auth-question/AuthQuestion.jsx';
import Button from '../../../components/button/Button.jsx';
import Input from '../../../components/input/Input.jsx';
import openEyeImg from '../../../assets/open-eye.png';
import closeEyeImg from '../../../assets/closed-eye.png';
import ErrorMessage from '../../errors/ErrorMessage.jsx';
import Form from '../form/Form.jsx';
import './Signup.css';

const Signup = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ email: '', username: '', password: '' }); // Input field data
    const [showPassword, setShowPassword] = useState(false);
    const { isLoading, error, setError, fetch } = useFetch();

    const handleSignup = async (event) => {
        event.preventDefault();
        const response = await fetch('/auth/signup', 'post', data);
        if (response) navigate('/auth/verify/email');
    };

    const handleChange = (event, name) => {
        setError('');

        setData((prevData) => {
            const newData = { ...prevData };
            newData[name] = event.target.value;
            return newData;
        });
    };

    let disableBtn = false; // Disables the submit button
    if (!data.username || !data.password || !data.email || !isValidEmail(data.email)) disableBtn = true;

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
            type: 'email',
            placeholder: 'example@testmaker.com',
            labelText: 'Email',
            onChange: (e) => handleChange(e, 'email'),
        },
        {
            id: 'f-3',
            type: showPassword ? 'text' : 'password',
            placeholder: 'Enter your password',
            labelText: 'Password',
            onChange: (e) => handleChange(e, 'password'),
            imgSrc: showPassword ? closeEyeImg : openEyeImg,
            onImageClick: () => setShowPassword(!showPassword),
        },
    ];

    const description = 'Please fill in your details below to create an account with us';

    return (
        <>
            <Form heading="Get Started" description={description}>
                {fields.map((field) => (
                    <Input key={field.id} {...field} />
                ))}
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Button disabled={disableBtn} loading={isLoading} onClick={(e) => handleSignup(e)}>
                    Create Account
                </Button>
            </Form>
            <AuthQuestion onClick={() => navigate('/auth/login')} linkText="Login">
                Already have an account?
            </AuthQuestion>
        </>
    );
};

export default Signup;
