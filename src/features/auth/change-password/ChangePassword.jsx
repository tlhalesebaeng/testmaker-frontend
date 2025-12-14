import { useNavigate } from 'react-router-dom';
import Button from '../../../components/button/Button.jsx';
import Input from '../../../components/input/Input.jsx';
import AuthContainer from '../auth-container/AuthContainer.jsx';
import openEyeImg from '../../../assets/open-eye.png';
import closeEyeImg from '../../../assets/closed-eye.png';
import Form from '../form/Form.jsx';
import './ChangePassword.css';
import { useState } from 'react';

const ChangePassword = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ password: '', confirmPassword: '' }); // Input field data
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);

    const handleChangePassword = (event) => {
        event.preventDefault();
        navigate('/home');
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
            onChange: (e) => handleChange(e, 'password'),
            imgSrc: showConfirmPassword ? closeEyeImg : openEyeImg,
            onImageClick: () => setConfirmShowPassword(!showConfirmPassword),
        },
    ];
    return (
        <AuthContainer>
            <Form heading="Create New Password" description="">
                {fields.map((field) => (
                    <Input key={field.id} {...field} />
                ))}
                <Button disabled={disableBtn} onClick={(e) => handleChangePassword(e)}>
                    Change Password
                </Button>
            </Form>
        </AuthContainer>
    );
};

export default ChangePassword;
