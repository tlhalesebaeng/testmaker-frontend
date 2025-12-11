import './Button.css';

/**
 * @param {JSX} children Elements that the component receives as children. They are rendered between the button tags
 */

const Button = ({ children, onClick }) => {
    return (
        <div className="button-container">
            <button onClick={onClick}>{children}</button>
        </div>
    );
};

export default Button;
