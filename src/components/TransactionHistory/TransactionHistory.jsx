import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => (
  <table>
    <thead className={css.tableHead}>
      <tr>
        <th className={css.tableColumn}>Type</th>
        <th className={css.tableColumn}>Amount</th>
        <th className={css.tableColumn}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}>
          <td className={css.tableRow}>{type}</td>
          <td className={css.tableRow}>{amount}</td>
          <td className={css.tableRow}>{currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
