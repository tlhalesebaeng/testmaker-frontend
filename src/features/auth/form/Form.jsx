import './Form.css';

/**
 * @prop {string} heading // The text displayed as a level 2 heading
 * @prop {string} description // A short description of what the user should do
 */

const Form = ({ heading, description }) => {
    return (
        <div className="form">
            <h2>{heading}</h2>
            <p>{description}</p>
        </div>
    );
};

export default Form;
