import { useState } from 'react';

import Button from '../../../components/button/Button.jsx';
import Card from '../../../components/card/Card.jsx';
import Input from '../../../components/input/Input.jsx';
import Form from '../form/Form.jsx';
import './Signup.css';

const Signup = () => {
    const [data, setData] = useState({ email: '', username: '', password: '' }); // Input field data

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleChange = (event, name) => {
        setData((prevData) => {
            const newData = { ...prevData };
            newData[name] = event.target.value;
            return newData;
        });
    };

    let disableBtn = false; // Disables the submit button
    if (!data.username || !data.email || !data.password) disableBtn = true;

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
            type: 'password',
            placeholder: 'Enter your password',
            labelText: 'Password',
            onChange: (e) => handleChange(e, 'password'),
        },
    ];

    const description = 'Please fill in your details below to create an account with us';

    return (
        <div className="max-width max-height flex-container center">
            <Card className="auth__card flex-container column">
                <Form heading="Signup" description={description}>
                    {fields.map((field) => (
                        <Input key={field.id} {...field} />
                    ))}
                    <Button disabled={disableBtn} onClick={(e) => handleSubmit(e)}>
                        Create Account
                    </Button>
                </Form>
            </Card>
        </div>
    );
};

export default Signup;
