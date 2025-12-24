/**
 * @param {JSX} children Elements that the component receives as children and are rendered between p tags
 */

const ErrorMessage = ({ children }) => {
    return <p className="error-message max-width flex-container justify-center">{children}</p>;
};

export default ErrorMessage;
