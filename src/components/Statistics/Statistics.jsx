import PropTypes from 'prop-types';
import { MarkUpStatisticsItem } from './MarkUpStatiscticsItem';
import css from './Statistics.module.css';

export function Statistics({ title, stats }) {
  return (
    <section className={css.statistics}>
      {title.length !== 0 && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => (
          <MarkUpStatisticsItem
            key={id}
            label={label}
            percentage={percentage}
          />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
