import css from './Profile.module.css';
import { MarkUpProfile } from './MarkUpProfile';
import { MarkUpProfileStats } from './MarkUpProfile';

export function Profile({ user }) {
  const { username, tag, location, avatar, stats } = user;
  return (
    <div className={css.profile}>
      <MarkUpProfile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <MarkUpProfileStats stats={stats} />
    </div>
  );
}
