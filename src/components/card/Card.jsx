import './Card.css';

/**
 * @param {JSX} children Elements that the component receives as children
 * @param {string} className Used to add more class names to the div element
 */

const Card = ({ children, className }) => {
    return <div className={`card${className ? ' ' + className : ''}`}>{children}</div>;
};

export default Card;
