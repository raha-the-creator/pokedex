const TypingBox = ({ type, typestyle }) => {
  return <div className={`typing-box-card-${typestyle}`}>{type}</div>;
};

export default TypingBox;
