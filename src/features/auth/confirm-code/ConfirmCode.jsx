import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { useFetch } from '../../../hooks/useFetch.js';
import { authActions } from '../../../store/auth-slice.js';

import Button from '../../../components/button/Button.jsx';
import Input from '../../../components/input/Input.jsx';
import AuthQuestion from '../auth-question/AuthQuestion';
import ErrorMessage from '../../errors/ErrorMessage.jsx';
import Form from '../form/Form.jsx';
import './ConfirmCode.css';

const ConfirmCode = ({ type }) => {
    const navigate = useNavigate();
    const [data, setData] = useState({ code: '' }); // Code input field data
    const { isLoading, error, setError, fetch } = useFetch();
    const dispatch = useDispatch();

    const handleConfirm = async (event) => {
        event.preventDefault();

        if (type === 'verify-email') {
            const response = await fetch('/auth/verify/email', 'post', data);

            if (response && response.data) {
                dispatch(authActions.login(response.data.user));
                navigate('/home');
            }
            return;
        }

        navigate(`/auth/password/reset/${data.code}/new`); // Verify the code
    };

    const handleChange = (event, name) => {
        setError('');

        setData((prevData) => {
            const newData = { ...prevData };
            newData[name] = event.target.value;
            return newData;
        });
    };

    let disableBtn = false; // Disables the confirm button
    if (!data.code) disableBtn = true;

    const fieldProps = {
        type: 'text',
        placeholder: 'Enter the code',
        labelText: 'Code',
        onChange: (e) => handleChange(e, 'code'),
    };

    const heading = type === 'verify-email' ? 'Verify Email Address' : 'Confirm Code';
    const description = 'Enter the one time 6-digit code sent to your email';

    return (
        <>
            <Form heading={heading} description={description}>
                <Input {...fieldProps} />
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <Button loading={isLoading} disabled={disableBtn} onClick={handleConfirm}>
                    Confirm
                </Button>
            </Form>
            <AuthQuestion linkText="Resend">Didn't receive the code?</AuthQuestion>
            {type !== 'verify-email' && (
                <div className="max-width flex-container justify-center">
                    <p className="confirm-code__message">
                        If you have remembered your password you can abort the process and{' '}
                        <a onClick={() => navigate('/auth/login')}>Login</a> to access your account
                    </p>
                </div>
            )}
        </>
    );
};

export default ConfirmCode;
