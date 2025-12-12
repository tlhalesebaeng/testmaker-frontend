import './Input.css';

/**
 *
 * @prop {string} type Attribute used on the input element to specify its type
 * @prop {string} placeholder Input element attribute that specifies the placeholder shown on the element
 * @prop {string} labelText The text that the label element display. This is also used to link the label to the input which implies that it should be unique
 * @prop {Function} onChange A function that is executed when a change occurs on the input field
 */

const Input = ({ type, placeholder, labelText, onChange }) => {
    return (
        <div className="input-container">
            <label htmlFor={labelText.toLowerCase()}>{labelText}</label>
            <input id={labelText.toLowerCase()} type={type} placeholder={placeholder} onChange={onChange} />
        </div>
    );
};

export default Input;
