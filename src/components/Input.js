const Input = (props) => {
  const { width, placeholder } = props;
  return (
    <input
      style={{
        border: "1px solid #dcdcdc",
        borderRadius: 4,
        padding: "8px 16px",
        width: width,
        outline: "none",
      }}
      placeholder={placeholder}
    />
  );
};

export default Input;
