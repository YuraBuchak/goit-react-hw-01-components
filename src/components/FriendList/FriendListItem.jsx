import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendListItem = ({ friend }) => {
  const { avatar, name, isOnline } = friend;
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
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
