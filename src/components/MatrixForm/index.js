import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";
import "./index.scss";
import SettingsItem from "../SettingsItem";
import CustomButton from "../shared/CustomButton";
import { getMatrixSettingsSelector } from "../../store/matrix-reducer/selectors";
import { setSettings, setMatrix } from "../../store/matrix-reducer/actions";

const MatrixForm = () => {
  const dispatch = useDispatch();

  const settings = useSelector(getMatrixSettingsSelector);

  const generateMatrix = (columns, rows) => {
    const matrix = Array.from({ length: rows }, () =>
      Array(columns)
        .fill(null)
        .map(() => Math.round(100 - 0.5 + Math.random() * (1000 - 100 + 1)))
        .map((val) => ({ id: nanoid(), value: val }))
    );
    dispatch(setMatrix(matrix));
  };
  const handleChangeSettings = (field, value) => {
    dispatch(setSettings({ ...settings, [field]: +value }));
  };

  return (
    <div className="matrixCreator">
      <h1 className="title">Matrix builder</h1>
      <div>
        <div className="inputValues-wrap">
          <SettingsItem
            label="Set columns"
            value={settings.columns}
            onChange={(e) => handleChangeSettings("columns", e.target.value)}
          />
          <SettingsItem
            label="Set rows"
            value={settings.rows}
            onChange={(e) => handleChangeSettings("rows", e.target.value)}
          />
          <SettingsItem
            label="Set cells"
            value={settings.cells}
            onChange={(e) => handleChangeSettings("cells", e.target.value)}
          />
        </div>
        <div className="btn-wrap">
          <CustomButton
            className="mainPageBtn"
            title="Create matrix"
            onClick={() => generateMatrix(settings.columns, settings.rows)}
          />
        </div>
      </div>
    </div>
  );
};
export default MatrixForm;
