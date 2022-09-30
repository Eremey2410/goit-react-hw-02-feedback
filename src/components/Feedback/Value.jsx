export const Value = ({
  valueGood,
  valueNeutral,
  valueBad,
  valueTotal,
  valuePositivePercentage,
}) => (
  <div>
    <p>Good:{valueGood}</p>
    <p>Neutral:{valueNeutral}</p>
    <p>Bad:{valueBad}</p>
    <p>Total:{valueTotal}</p>
    <p>Positive feedback:{valuePositivePercentage}%</p>
  </div>
);
