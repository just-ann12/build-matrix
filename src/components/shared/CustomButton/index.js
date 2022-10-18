import "./index.scss";

const CustomButton = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      {props.title}
    </button>
  );
};

export default CustomButton;
