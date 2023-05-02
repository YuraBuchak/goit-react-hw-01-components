import PropTypes from 'prop-types';
import css from './Profile.module.css';

export const MarkUpProfile = ({ username, tag, location, avatar }) => (
  <>
    <div className={css.user}>
      <img src={avatar} alt="User avatar" className={css.avatar} />
      <p className={css.username}>{username}</p>
      <p className={css.info}>@{tag}</p>
      <p className={css.info}>{location}</p>
    </div>
  </>
);

export const MarkUpProfileStats = ({ stats }) => {
  const { followers, likes, views } = stats;
  return (
    <>
      <ul className={css.statsList}>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Followers</span>
          <span className={css.statsQuantity}>{followers}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Views</span>
          <span className={css.statsQuantity}>{likes}</span>
        </li>
        <li className={css.statsItem}>
          <span className={css.statsLabel}>Likes</span>
          <span className={css.statsQuantity}>{views}</span>
        </li>
      </ul>
    </>
  );
};

MarkUpProfile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

MarkUpProfileStats.propTypes = {
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
  }).isRequired,
};
