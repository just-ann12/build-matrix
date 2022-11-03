import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getArraySum,
  getValueArrFromObjsArr,
} from "../../../utils/helpers/array";
import DeleteBtn from "../../../utils/img/remove.png";
import TableCell from "./TableCell";
import { removeRow } from "../../../store/matrix-reducer/actions";

const TableRow = ({ row, index }) => {
  const dispatch = useDispatch();
  const [isPercentageMode, setPercentageMode] = useState(false);

  return (
    <tr>
      <td>{index + 1}</td>
      {row.map((item) => (
        <TableCell row={row} data={item} isPercentageMode={isPercentageMode} />
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
          onClick={() => dispatch(removeRow(index))}
        >
          <img src={DeleteBtn} />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
