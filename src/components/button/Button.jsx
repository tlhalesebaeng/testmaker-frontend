import './Button.css';

/**
 * @prop {JSX} children Elements that the component receives as children. They are rendered between the button tags
 * @prop {Function} onClick A function triggered when the button is clicked
 * @prop {boolean} disabled Determines whether the button is clickable or not
 * @prop {boolean} loading A loading state is shown when this boolean is true otherwise children are rendered
 */

const Button = ({ children, onClick, disabled, loading }) => {
    return (
        <div className="button-container">
            <button onClick={onClick} disabled={loading || disabled}>
                {loading ? 'Loading...' : children}
            </button>
        </div>
    );
};

export default Button;
