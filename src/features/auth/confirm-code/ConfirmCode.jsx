import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../../components/button/Button.jsx';
import Input from '../../../components/input/Input.jsx';
import AuthContainer from '../auth-container/AuthContainer.jsx';
import AuthQuestion from '../auth-question/AuthQuestion';
import Form from '../form/Form.jsx';
import './ConfirmCode.css';

const ConfirmCode = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({ code: '' }); // Code input field data

    const handleConfirm = (event) => {
        event.preventDefault();
        navigate(`/password/reset/${data.code}/new`); // Verify the code
    };

    const handleChange = (event, name) => {
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

    const description = 'Enter the one time 6-digit code sent to your email';

    return (
        <AuthContainer>
            <Form heading="Confirm Code" description={description}>
                <Input {...fieldProps} />
                <Button disabled={disableBtn} onClick={handleConfirm}>
                    Confirm
                </Button>
            </Form>
            <AuthQuestion linkText="Resend">Didn't receive the code?</AuthQuestion>
            <div className="max-width flex-container justify-center">
                <p className="confirm-code__message">
                    If you have remembered your password you can abort the process and{' '}
                    <a onClick={() => navigate('/login')}>Login</a> to access your account
                </p>
            </div>
        </AuthContainer>
    );
};

export default ConfirmCode;
