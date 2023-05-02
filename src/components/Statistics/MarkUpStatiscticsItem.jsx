import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const MarkUpStatisticsItem = ({ id, label, percentage }) => (
  <>
    <li
      className={css.item}
      key={id}
      style={{ backgroundColor: getRandomColor() }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  </>
);

MarkUpStatisticsItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

function getRandomColor() {
  return (
    '#' +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, '0')
      .toUpperCase()
  );
}
