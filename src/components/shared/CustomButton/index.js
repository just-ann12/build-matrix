import "./index.scss";

const CustomButton = ({ className, onClick, title }) => {
  return (
    <div className="btn-wrap">
      <button className={className} onClick={onClick}>
        {title}
      </button>
    </div>
  );
};

export default CustomButton;
