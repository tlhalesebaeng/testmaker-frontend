import './Input.css';

/**
 *
 * @prop {string} type Attribute used on the input element to specify its type
 * @prop {string} placeholder Input element attribute that specifies the placeholder shown on the element
 * @prop {string} labelText The text that the label element display. This is also used to link the label to the input which implies that it should be unique
 */

const Input = ({ type, placeholder, labelText }) => {
    return (
        <div className="input-container">
            <label htmlFor={labelText.toLowerCase()}>{labelText}</label>
            <input id={labelText.toLowerCase()} type={type} placeholder={placeholder} />
        </div>
    );
};

export default Input;
