import {
  getArraySum,
  getValueArrFromObjsArr,
} from "../../../utils/helpers/array";
import "../index.scss";

const RowAverageVal = ({ data }) => {
  const getAverageValueOfSumColumn = (data) => {
    const matrix = data.map((row) => getValueArrFromObjsArr(row));
    const sumOfRows = matrix.map((row) => getArraySum(row));
    return Math.round(sumOfRows.reduce((a, b) => a + b, 0) / sumOfRows.length);
  };

  const getAverageValues = (data) => {
    const matrix = data.map((row) => getValueArrFromObjsArr(row));
    const sumOfColumn = [];
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        sumOfColumn[j] = (sumOfColumn[j] || 0) + matrix[i][j];
      }
    }
    return sumOfColumn.map((val) => Math.round(val / sumOfColumn.length));
  };

  const avgValues = getAverageValues(data);
  const averageValueOfColumnSum = getAverageValueOfSumColumn(data);

  return (
    <tr>
      <td>Avg</td>
      {avgValues.map((val) => (
        <td className="greenCells">{val}</td>
      ))}
      <td className="greenCells">{averageValueOfColumnSum}</td>
    </tr>
  );
};

export default RowAverageVal;
