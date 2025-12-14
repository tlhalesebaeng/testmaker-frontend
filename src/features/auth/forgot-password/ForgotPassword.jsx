import Button from '../../../components/button/Button';
import Card from '../../../components/card/Card.jsx';
import Input from '../../../components/input/Input.jsx';
import AuthQuestion from '../auth-question/AuthQuestion';
import Form from '../form/Form.jsx';
import './ForgotPassword.css';

const ForgotPassword = () => {
    const fieldProps = {
        type: 'email',
        placeholder: 'Enter your email',
        labelText: 'Email',
    };

    const description = 'Please enter your email address to reset your password';

    return (
        <div className="max-width max-height flex-container center">
            <Card className="auth__card flex-container column">
                <Form heading="Forgot Password?" description={description}>
                    <Input {...fieldProps} />
                    <Button>Send Code</Button>
                </Form>
                <AuthQuestion linkText="Login">Remember your password?</AuthQuestion>
            </Card>
        </div>
    );
};

export default ForgotPassword;
