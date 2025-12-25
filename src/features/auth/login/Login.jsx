import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import { useFetch } from '../../../hooks/useFetch.js';
import { authActions } from '../../../store/auth-slice.js';

import Button from '../../../components/button/Button.jsx';
import Input from '../../../components/input/Input.jsx';
import AuthQuestion from '../auth-question/AuthQuestion.jsx';
import Form from '../form/Form.jsx';
import ErrorMessage from '../../errors/ErrorMessage.jsx';
import openEyeImg from '../../../assets/open-eye.png';
import closeEyeImg from '../../../assets/closed-eye.png';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ username: '', password: '', rememberUser: false }); // Input field data
    const [showPassword, setShowPassword] = useState(false);
    const { isLoading, error, setError, fetch } = useFetch();
    const dispatch = useDispatch();

    const handleLogin = async (event) => {
        event.preventDefault();
        const response = await fetch('/auth/login', 'post', data);
        if (response && response.data) {
            dispatch(authActions.login(response.data.user));
            navigate('/home');
        }
    };

    const handleChange = (event, name) => {
        setError('');

        setData((prevData) => {
            const newData = { ...prevData };
            if (name === 'rememberUser') newData[name] = event.target.checked; // This is how we get the checkbox value
            else newData[name] = event.target.value;
            return newData;
        });
    };

    if (error && error === 'Email not verified! Please verify your email address') {
        return <Navigate to="/auth/verify/email" />;
    }

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
            type: showPassword ? 'text' : 'password',
            placeholder: 'Enter your password',
            labelText: 'Password',
            onChange: (e) => handleChange(e, 'password'),
            imgSrc: showPassword ? closeEyeImg : openEyeImg,
            onImageClick: () => setShowPassword(!showPassword),
        },
    ];

    const description = 'Please fill in your details below to access your account';

    return (
        <>
            <Form heading="Welcome Back" description={description}>
                {fields.map((field) => (
                    <Input key={field.id} {...field} />
                ))}
                <div className="flex-container remember-me__container">
                    <div className="flex-container">
                        <input type="checkbox" onChange={(e) => handleChange(e, 'rememberUser')} />
                        <p>Remember me</p>
                    </div>
                    <a className="forgot-password" onClick={() => navigate('/auth/password/reset')}>
                        Forgot Password
                    </a>
                </div>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Button loading={isLoading} disabled={disableBtn} onClick={(e) => handleLogin(e)}>
                    Login
                </Button>
            </Form>
            <AuthQuestion onClick={() => navigate('/auth/signup')} linkText="Signup">
                Don't have an account?
            </AuthQuestion>
        </>
    );
};

export default Login;
