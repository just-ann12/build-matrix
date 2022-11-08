import CustomInput from "../shared/CustomInput";
import styles from "./index.module.scss";

const SettingsItem = ({ label, value, onChange }) => {
  return (
    <div className={styles.wrapper}>
      <p>{label}</p>
      <CustomInput type="number" value={value} onChange={onChange} />
    </div>
  );
};
export default SettingsItem;
