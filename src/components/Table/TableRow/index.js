import { useState } from "react";
import {
  getArraySum,
  getValueArrFromObjsArr,
} from "../../../utils/helpers/array";
import DeleteBtn from "../../../utils/img/remove.png";
import TableCell from "./TableCell";

const TableRow = ({
  dataMatrix,
  row,
  rowNumber,
  closestCellsAmount,
  onSearchClosestCells,
  closestCellsIds,
  setNewMatrixData,
}) => {
  const [isPercentageMode, setPercentageMode] = useState(false);

  const removeRow = (data, row) => {
    data = data.splice(0);
    data.splice(row - 1, 1);
    setNewMatrixData(data);
  };

  return (
    <tr>
      <td>{rowNumber}</td>
      {row.map((item) => (
        <TableCell
          dataMatrix={dataMatrix}
          row={row}
          data={item}
          closestCellsAmount={closestCellsAmount}
          onSearchClosestCells={onSearchClosestCells}
          closestCellsIds={closestCellsIds}
          isPercentageMode={isPercentageMode}
          setNewMatrixData={setNewMatrixData}
        />
      ))}

      <td
        className="greenCells"
        onMouseEnter={() => setPercentageMode(true)}
        onMouseLeave={() => setPercentageMode(false)}
      >
        {getArraySum(getValueArrFromObjsArr(row))}
      </td>
      <td className="deleteBtn">
        <button
          className="deleteTheRow"
          onClick={() => removeRow(dataMatrix, row)}
        >
          <img src={DeleteBtn} />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
