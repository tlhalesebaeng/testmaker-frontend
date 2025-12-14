import Button from '../../../components/button/Button.jsx';
import Input from '../../../components/input/Input.jsx';
import AuthContainer from '../auth-container/AuthContainer.jsx';
import Form from '../form/Form.jsx';
import './ChangePassword.css';

const ChangePassword = () => {
    const fields = [
        {
            id: 'f-1',
            type: 'password',
            placeholder: 'Enter your new password',
            labelText: 'Password',
        },
        {
            id: 'f-2',
            type: 'password',
            placeholder: 'Confirm your new password',
            labelText: 'Confirm Password',
        },
    ];
    return (
        <AuthContainer>
            <Form heading="Create New Password" description="">
                {fields.map((field) => (
                    <Input key={field.id} {...field} />
                ))}
                <Button>Change Password</Button>
            </Form>
        </AuthContainer>
    );
};

export default ChangePassword;
