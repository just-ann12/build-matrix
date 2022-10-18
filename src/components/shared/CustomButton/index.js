import "./index.scss";

const CustomButton = ({onClick, title}) => {
  return (
    <button className="btn" onClick={onClick}>
      {title}
    </button>
  );
};

export default CustomButton;
