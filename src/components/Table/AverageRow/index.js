import {
  getArraySum,
  getArrValueFromObjsArr,
} from "../../../utils/helpers/array";
import { useSelector } from "react-redux";
import { getMatrixDataSelector } from "../../../store/matrix-reducer/selectors";
import { TableCell } from "@mui/material";

const AverageRow = ({ className }) => {
  const data = useSelector(getMatrixDataSelector);
  const getAverageValueOfSumColumn = (data) => {
    const matrix = data.map((row) => getArrValueFromObjsArr(row));
    const sumOfRows = matrix.map((row) => getArraySum(row));
    return Math.round(sumOfRows.reduce((a, b) => a + b, 0) / sumOfRows.length);
  };

  const getAverageValues = (data) => {
    const matrix = data.map((row) => getArrValueFromObjsArr(row));
    return matrix
      .reduce((acc, current) => {
        current.forEach((e, i) => (acc[i] = acc[i] ? acc[i] + e : e));
        return acc;
      }, [])
      .map((e) => Math.round(e / matrix.length));
  };

  const avgValues = getAverageValues(data);
  const averageValueOfColumnSum = getAverageValueOfSumColumn(data);

  return (
    <tr>
      <TableCell>Avg</TableCell>
      {avgValues.map((val) => (
        <TableCell variant="green">{val}</TableCell>
      ))}
      <TableCell variant="green">{averageValueOfColumnSum}</TableCell>
    </tr>
  );
};

export default AverageRow;
