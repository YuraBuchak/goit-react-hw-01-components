import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const onlineStyle = {
    backgroundColor: isOnline ? 'green' : 'red',
  };
  return (
    <>
      <span className={css.isOnline} style={onlineStyle}></span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
