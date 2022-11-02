import { useDispatch, useSelector } from "react-redux";
import CustomButton from "../shared/CustomButton";
import CustomTableRow from "./TableRow";
import AverageRow from "./AverageRow";
import { addRow } from "../../store/matrix-reducer/actions";
import {
  getMatrixDataSelector,
  getMatrixSettingsSelector,
} from "../../store/matrix-reducer/selectors";
import { newValue } from "../../utils/helpers/newValue";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";

const CustomTable = () => {
  const dispatch = useDispatch();

  const settings = useSelector(getMatrixSettingsSelector);
  const data = useSelector(getMatrixDataSelector);

  const handleAddRow = () => {
    const row = Array(settings.columns).fill(null).map(newValue);
    dispatch(addRow(row));
  };

  return (
    <>
      <CustomButton variant="green" title="Add row" onClick={handleAddRow} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>№</TableCell>
            {data[0].map((_head, index) => (
              <TableCell key={index}>{index + 1}</TableCell>
            ))}
            <TableCell>Sum</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <CustomTableRow row={row} key={index} index={index} />
          ))}
          <AverageRow />
        </TableBody>
      </Table>
    </>
  );
};

export default CustomTable;
