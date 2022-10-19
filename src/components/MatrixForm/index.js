import "./index.scss";
import { useState } from "react";
import SettingsItem from "../SettingsItem";
import CustomButton from "../shared/CustomButton";
import Table from "../Table";
const MatrixForm = () => {
  const [isClicked, setClick] = useState(false);

  const [settings, setSettings] = useState({
    columns: 0,
    rows: 0,
    cells: 0,
  });

  const handleClick = (e) => {
    e.preventDefault();
    setClick(true);
  };
  const generateMatrix = (columns, rows) => {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
      const row = [...new Array(columns)].map(() =>
        Math.round(100 - 0.5 + Math.random() * (1000 - 100 + 1))
      );
      matrix.push(row);
      console.log(matrix);
    }
    return matrix;
  };

  const createHeadingOfMatrix = (columns) => {
    return Array.from({ length: columns }, (_, index) => index + 1);
  };

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
            onChange={(e) =>
              setSettings({ ...settings, rows: +e.target.value })
            }
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
            onClick={handleClick}
          />
        </div>
      </form>
      {isClicked && (
        <Table
          heading={createHeadingOfMatrix(settings.columns)}
          body={generateMatrix(settings.columns, settings.rows)}
        />
      )}
    </div>
  );
};
export default MatrixForm;
