import CustomInput from "../shared/CustomInput";
import "./index.scss";
const SettingsItem = ({ label, value, onChange }) => {
  return (
    <div className="inputValues">
      <p>{label}</p>
      <CustomInput type='number' value={value} onChange={onChange} />
    </div>
  );
};
export default SettingsItem;
