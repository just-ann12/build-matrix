import CustomInput from '../shared/CustomInput';
import "./index.scss";
const SettingsItem = (props) => {
  return (
    <div className="inputValues">
      <p>{props.label}</p>
      <CustomInput value={props.value} onChange={props.onChange} />
    </div>
  );
};
export default SettingsItem;
