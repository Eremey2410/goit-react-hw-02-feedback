import PropTypes from 'prop-types';

export const Statistics = ({
  valueGood,
  valueNeutral,
  valueBad,
  valueTotal,
  valuePositivePercentage,
}) => (
  <section>
    <h1>Statistics</h1>
    <div>
      <p>Good:{valueGood}</p>
      <p>Neutral:{valueNeutral}</p>
      <p>Bad:{valueBad}</p>
      <p>Total:{valueTotal}</p>
      <p>Positive feedback:{valuePositivePercentage}%</p>
    </div>
  </section>
);
Statistics.propTypes = {
  valueGood: PropTypes.number.isRequired,
  valueNeutral: PropTypes.number.isRequired,
  valueBad: PropTypes.number.isRequired,
  valueTotal: PropTypes.number.isRequired,
  valuePositivePercentage: PropTypes.number.isRequired,
};
