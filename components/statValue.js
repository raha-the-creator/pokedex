const StatValue = ({ category, value }) => {
  return (
    <div className="stat-value">
      <p>{category}</p>
      <span>{value}</span>
    </div>
  );
};

export default StatValue;
