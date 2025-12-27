import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { useFetch } from '../../../hooks/useFetch.js';
import { authActions } from '../../../store/auth-slice.js';

import Button from '../../../components/button/Button.jsx';
import Input from '../../../components/input/Input.jsx';
import openEyeImg from '../../../assets/open-eye.png';
import closeEyeImg from '../../../assets/closed-eye.png';
import Form from '../form/Form.jsx';
import './ResetPassword.css';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ password: '', confirmPassword: '' }); // Input field data
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
    const dispatch = useDispatch();
    const params = useParams();
    const { fetch } = useFetch();

    const handleChangePassword = async (event) => {
        event.preventDefault();

        const response = await fetch('/auth/password/new', 'patch', data, {
            params: { code: params.code },
        });

        if (response && response.data && response.data.isAuth) {
            dispatch(authActions.login(response.data.user));
            navigate('/home');
        }
    };

    const handleChange = (event, name) => {
        setData((prevData) => {
            const newData = { ...prevData };
            newData[name] = event.target.value;
            return newData;
        });
    };

    let disableBtn = false; // Disables the submit button
    if (!data.password || !data.confirmPassword) disableBtn = true;

    const fields = [
        {
            id: 'f-1',
            type: showPassword ? 'text' : 'password',
            placeholder: 'Enter your new password',
            labelText: 'Password',
            onChange: (e) => handleChange(e, 'password'),
            imgSrc: showPassword ? closeEyeImg : openEyeImg,
            onImageClick: () => setShowPassword(!showPassword),
        },
        {
            id: 'f-2',
            type: showConfirmPassword ? 'text' : 'password',
            placeholder: 'Confirm your new password',
            labelText: 'Confirm Password',
            onChange: (e) => handleChange(e, 'confirmPassword'),
            imgSrc: showConfirmPassword ? closeEyeImg : openEyeImg,
            onImageClick: () => setConfirmShowPassword(!showConfirmPassword),
        },
    ];

    return (
        <Form heading="Create New Password" description="">
            {fields.map((field) => (
                <Input key={field.id} {...field} />
            ))}
            <Button disabled={disableBtn} onClick={(e) => handleChangePassword(e)}>
                Change Password
            </Button>
        </Form>
    );
};

export default ResetPassword;
