import './Button.css';

/**
 * @prop {JSX} children Elements that the component receives as children. They are rendered between the button tags
 * @prop {Function} onClick A function triggered when the button is clicked
 * @prop {boolean} disabled Determines whether the button is clickable or not
 */

const Button = ({ children, onClick, disabled }) => {
    return (
        <div className="button-container">
            <button onClick={onClick} disabled={disabled}>
                {children}
            </button>
        </div>
    );
};

export default Button;
