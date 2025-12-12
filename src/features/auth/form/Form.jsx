import './Form.css';

/**
 * @prop {string} heading The text displayed as a level 2 heading
 * @prop {string} description A short description of what the user should do
 * @param {JSX} children Elements that the component receives as children and are rendered between form tags
 */

const Form = ({ heading, description, children }) => {
    return (
        <div className="form">
            <h2 className="flex-container justify-center">{heading}</h2>
            <p className="flex-container justify-center">{description}</p>
            <form>{children}</form>
        </div>
    );
};

export default Form;
