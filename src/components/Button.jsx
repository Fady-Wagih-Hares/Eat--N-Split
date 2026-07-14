const Button = ({ children, onClick, value }) => {
  return (
    <button className="button" onClick={onClick} value={value}>
      {children}
    </button>
  );
};
export default Button;
