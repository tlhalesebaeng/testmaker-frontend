import { useState } from 'react';

import Button from '../../../components/button/Button.jsx';
import Input from '../../../components/input/Input.jsx';
import AuthContainer from '../auth-container/AuthContainer.jsx';
import AuthQuestion from '../auth-question/AuthQuestion';
import Form from '../form/Form.jsx';

const ConfirmCode = () => {
    const [data, setData] = useState({ code: '' }); // Code input field data

    const handleChange = (event, name) => {
        setData((prevData) => {
            const newData = { ...prevData };
            newData[name] = event.target.value;
            return newData;
        });
    };

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
                <Button>Confirm</Button>
            </Form>
            <AuthQuestion linkText="Resend">Didn't receive the code?</AuthQuestion>
        </AuthContainer>
    );
};

export default ConfirmCode;
