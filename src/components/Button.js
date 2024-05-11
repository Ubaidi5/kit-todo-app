const Button = (props) => {
  const { bgcolor, color } = props;
  return (
    <button
      style={{
        padding: "8px 16px",
        border: "none",
        borderRadius: 4,
        outline: "none",
        backgroundColor: bgcolor,
        color: color,
      }}
    >
      some text
    </button>
  );
};

export default Button;
