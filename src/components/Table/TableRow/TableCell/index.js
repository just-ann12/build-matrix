import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCellPersentage } from "../../../../utils/helpers/array";
import { searchClosestCells } from "../../../../utils/helpers/search-closest-cells";
import { increaseMatrixCellVal } from "../../../../utils/helpers/increment-cell";
import { setClosestCellIds } from "../../../../store/matrix-reducer/actions";
import {
  getClosestCellIdsSelector,
  getMatrixDataSelector,
  getMatrixSettingsSelector,
} from "../../../../store/matrix-reducer/selectors";
import { setMatrix } from "../../../../store/matrix-reducer/actions";
const TableCell = ({ data, row, isPercentageMode }) => {
  const dispatch = useDispatch();

  const settings = useSelector(getMatrixSettingsSelector);
  const dataMatrix = useSelector(getMatrixDataSelector);
  const closestCellIds = useSelector(getClosestCellIdsSelector);

  const cellRender = isPercentageMode
    ? `${getCellPersentage(row, data.value)}%`
    : data.value;

  const handleEnterMouse = (id) => {
    const closestIds = searchClosestCells(dataMatrix, settings.cells, id);
    dispatch(setClosestCellIds(closestIds));
  };

  const handleIncreaseCell = (id) => {
    const newData = increaseMatrixCellVal(dataMatrix, id);
    dispatch(setMatrix(newData));
  };

  const style = useMemo(() => {
    if (isPercentageMode)
      return {
        backgroundImage: `linear-gradient(to top,red ${getCellPersentage(
          row,
          data.value
        )}%,transparent 0%)`,
      };
    if (closestCellIds.includes(data.id)) return { background: "yellow" };
  }, [isPercentageMode, closestCellIds]);

  return (
    <td
      style={style}
      onMouseEnter={() => handleEnterMouse(data.id)}
      onMouseLeave={() => dispatch(setClosestCellIds([]))}
      onClick={() => handleIncreaseCell(data.id)}
      className="blueCells"
    >
      {cellRender}
    </td>
  );
};

export default TableCell;
