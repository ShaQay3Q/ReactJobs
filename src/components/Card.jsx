import PropTypes from "prop-types";

Card.propTypes = {
	children: PropTypes.element,
};

export default function Card({ children }) {
	return <div className='bg-gray-100 p-6 rounded-lg shadow-md'>{children}</div>;
}
