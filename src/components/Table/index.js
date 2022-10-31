import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../shared/CustomButton";
import "./index.scss";
import TableRow from "./TableRow";
import AverageRow from "./RowAverageVal";
import { addRow } from "../../store/matrix-reducer/actions";
import {
  getMatrixDataSelector,
  getMatrixSettingsSelector,
} from "../../store/matrix-reducer/selectors";
import { newValue } from "../../utils/helpers/newValue";

const Table = () => {
  const dispatch = useDispatch();

  const settings = useSelector(getMatrixSettingsSelector);
  const data = useSelector(getMatrixDataSelector);

  const handleAddRow = () => {
    const row = Array(settings.columns).fill(null).map(newValue);
    dispatch(addRow(row));
  };

  return (
    <div className="matrix-wrap">
      <div className="btn-wrap">
        <CustomButton
          className="addRowBtn"
          title="Add row"
          onClick={handleAddRow}
        />
      </div>
      <table className="matrix">
        <thead>
          <tr>
            <th>№</th>
            {data[0].map((_head, index) => (
              <th key={index}>{index + 1}</th>
            ))}
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <TableRow row={row} key={index} index={index} />
          ))}
          <AverageRow />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
