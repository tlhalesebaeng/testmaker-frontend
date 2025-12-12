import './AuthQuestion.css';

/**
 *
 * @prop {JSX} children The elements that the components receive as children. This should be a text
 * @prop {string} linkText What is displayed in the anchor tag
 * @prop {Function} onClick A function that is triggered when the achor tag is clicked
 */

const AuthQuestion = ({ children, linkText, onClick }) => {
    return (
        <div className="auth-question max-width flex-container justify-center">
            <p>{children}</p>
            <a onClick={onClick}>{linkText}</a>
        </div>
    );
};

export default AuthQuestion;
