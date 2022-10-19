import "./index.scss";
import SettingsItem from "../SettingsItem";
import CustomButton from "../shared/CustomButton";
import { nanoid } from "nanoid";
const MatrixForm = ({ onCreateMatrix, setClick, settings, onSetSettings }) => {
  const handleClick = (e) => {
    e.preventDefault();
    generateMatrix(settings.columns, settings.rows);
  };

  const generateMatrix = (columns, rows) => {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
      const row = Array(columns)
        .fill(null)
        .map(() => Math.round(100 - 0.5 + Math.random() * (1000 - 100 + 1)));
      const customRow = row.map((val) => ({ id: nanoid(), value: val }));
      matrix.push(customRow);
    }
    onCreateMatrix(matrix);
  };

  return (
    <div className="matrixCreator">
      <h1 className="title">Matrix builder</h1>
      <div>
        <div className="inputValues-wrap">
          <SettingsItem
            label="Set columns"
            value={settings.columns}
            onChange={(e) =>
              onSetSettings({ ...settings, columns: +e.target.value })
            }
          />
          <SettingsItem
            label="Set rows"
            value={settings.rows}
            onChange={(e) =>
              onSetSettings({ ...settings, rows: +e.target.value })
            }
          />
          <SettingsItem
            label="Set cells"
            value={settings.cells}
            onChange={(e) =>
              onSetSettings({ ...settings, cells: +e.target.value })
            }
          />
        </div>
        <div className="btn-wrap">
          <CustomButton
            className="mainPageBtn"
            title="Create matrix"
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};
export default MatrixForm;
