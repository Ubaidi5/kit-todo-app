const Input = (props) => {
  const { width, placeholder, value, onChange } = props;
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
      value={value}
      onChange={(e) => {
        onChange(e.target.value);
      }}
    />
  );
};

export default Input;
