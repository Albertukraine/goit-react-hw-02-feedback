import PropTypes from 'prop-types';
import style from './Notification.module.css';

export const Notification = props => {
  const { message } = props;
  //  console.log("BTNprops",props);
  return <p className={style.notificaton}>{message}</p>;
};

Notification.propTypes = {
  message: PropTypes.string,
};
