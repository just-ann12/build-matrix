import "./index.scss";
import { useState } from "react";
import SettingsItem from "../SettingsItem";
import CustomButton from "../shared/CustomButton";

const MatrixForm = () => {

  const [settings, setSettings] = useState({
    columns: 0,
    rows: 0,
    cells: 0,
  });
  return (
    <div className="matrixCreator">
      <h1 className="title">Matrix builder</h1>
      <form>
        
        <div className="inputValues-wrap">
          <SettingsItem
            label="Set columns"
            value={settings.columns}
            onChange={(e) =>
              setSettings({ ...settings, columns: +e.target.value })
            }
          />
          <SettingsItem
            label="Set rows"
            value={settings.rows}
            onChange={(e) => setSettings({ ...settings, rows: +e.target.value })}
          />
          <SettingsItem
            label="Set cells"
            value={settings.cells}
            onChange={(e) =>
              setSettings({ ...settings, cells: +e.target.value })
            }
          />
        </div>
        <div className="btn-wrap">
          <CustomButton
            className="mainPageBtn"
            title="Create matrix"
            onClick={() => {}}
          />
        </div>
      </form>
    </div>
  );
};
export default MatrixForm;
