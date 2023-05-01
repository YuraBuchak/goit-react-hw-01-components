import css from './Profile.module.css';
import user from '../../user.json';
import { MarkUpProfile } from './MarkUpProfile';

export function Profile() {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className={css.profile}>
      <MarkUpProfile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
    </div>
  );
}
