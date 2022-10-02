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
