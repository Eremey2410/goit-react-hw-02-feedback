import PropTypes from 'prop-types';

export const Notification = ({ message }) => <h1>{message}</h1>;
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
