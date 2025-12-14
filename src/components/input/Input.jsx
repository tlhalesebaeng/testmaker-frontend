import './Input.css';

/**
 * @prop {string} type Attribute used on the input element to specify its type
 * @prop {string} placeholder Input element attribute that specifies the placeholder shown on the element
 * @prop {string} labelText The text that the label element display. This is also used to link the label to the input which implies that it should be unique
 * @prop {string} imgSrc The source of the image
 * @prop {Function} onChange A function that is executed when a change occurs on the input field
 * @prop {Function} onImageClick A function that defines what happens when the image is clicked
 *
 */

const Input = ({ type, placeholder, labelText, onChange, imgSrc, onImageClick }) => {
    const label = labelText ? labelText.toLowerCase() : undefined;
    return (
        <div className="input-container">
            <label htmlFor={label}>{labelText}</label>
            <input id={label} type={type} placeholder={placeholder} onChange={onChange} />
            {imgSrc && <img onClick={onImageClick} src={imgSrc} alt={`${label}-img`} />}
        </div>
    );
};

export default Input;
