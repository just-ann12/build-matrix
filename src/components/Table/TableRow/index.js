import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getArraySum,
  getArrValueFromObjsArr,
} from "../../../utils/helpers/array";
import DeleteBtn from "../../../utils/img/remove.png";
import CustomTableCell from "./TableCell";
import { removeRow } from "../../../store/matrix-reducer/actions";
import styles from "./index.module.scss";
import { TableRow, TableCell } from "@mui/material";

const CustomTableRow = ({ row, index}) => {
  const dispatch = useDispatch();
  const [isPercentageMode, setPercentageMode] = useState(false);

  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      {row.map((item) => (
        <CustomTableCell
          row={row}
          data={item}
          isPercentageMode={isPercentageMode}
        />
      ))}

      <TableCell
        variant="green"
        onMouseEnter={() => setPercentageMode(true)}
        onMouseLeave={() => setPercentageMode(false)}
      >
        {getArraySum(getArrValueFromObjsArr(row))}
      </TableCell>
      <TableCell>
        <button
          className={styles.button_delete}
          onClick={() => dispatch(removeRow(index))}
        >
          <img src={DeleteBtn} />
        </button>
      </TableCell>
    </TableRow>
  );
};

export default CustomTableRow;
