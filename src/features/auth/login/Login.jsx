import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../components/button/Button.jsx';
import Input from '../../../components/input/Input.jsx';
import AuthQuestion from '../auth-question/AuthQuestion.jsx';
import Form from '../form/Form.jsx';
import AuthContainer from '../auth-container/AuthContainer.jsx';
import openEyeImg from '../../../assets/open-eye.png';
import closeEyeImg from '../../../assets/closed-eye.png';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ username: '', password: '', rememberUser: false }); // Input field data
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (event) => {
        event.preventDefault();
        navigate('/home');
    };

    const handleChange = (event, name) => {
        setData((prevData) => {
            const newData = { ...prevData };
            if (name === 'rememberUser') newData[name] = event.target.checked; // This is how we get the checkbox value
            else newData[name] = event.target.value;
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
            type: showPassword ? 'password' : 'text',
            placeholder: 'Enter your password',
            labelText: 'Password',
            onChange: (e) => handleChange(e, 'password'),
            imgSrc: showPassword ? openEyeImg : closeEyeImg,
            onImageClick: () => setShowPassword(!showPassword),
        },
    ];

    const description = 'Please fill in your details below to access your account';

    return (
        <AuthContainer>
            <Form heading="Welcome Back" description={description}>
                {fields.map((field) => (
                    <Input key={field.id} {...field} />
                ))}
                <div className="flex-container remember-me__container">
                    <div className="flex-container">
                        <input type="checkbox" onChange={(e) => handleChange(e, 'rememberUser')} />
                        <p>Remember me</p>
                    </div>
                    <a className="forgot-password" onClick={() => navigate('/password/reset')}>
                        Forgot Password
                    </a>
                </div>
                <Button disabled={disableBtn} onClick={(e) => handleLogin(e)}>
                    Login
                </Button>
            </Form>
            <AuthQuestion onClick={() => navigate('/signup')} linkText="Signup">
                Don't have an account?
            </AuthQuestion>
        </AuthContainer>
    );
};

export default Login;
