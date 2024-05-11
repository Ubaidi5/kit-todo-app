const Button = (props) => {
  const { bgcolor, color, children, onClick } = props;
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
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
