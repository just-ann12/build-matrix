import { getCellPersentage } from "../../../../utils/helpers/array";
import { searchClosestCells } from "../../../../utils/helpers/search-closest-cells";
import { increaseMatrixCellVal } from "../../../../utils/helpers/increment-cell";
import { useMemo } from "react";

const TableCell = ({
  data,
  row,
  dataMatrix,
  closestCellsAmount,
  onSearchClosestCells,
  closestCellsIds,
  setNewMatrixData,
  isPercentageMode,
}) => {
  const cellRender = isPercentageMode
    ? `${getCellPersentage(row, data.value)}%`
    : data.value;

  const handleEnterMouse = (matrix, amount, id) => {
    const sortedMatrixIds = searchClosestCells(matrix, amount, id);
    onSearchClosestCells(sortedMatrixIds);
  };

  const increaseCellValByOne = (matrix, id) => {
    const matrixWithIncreasedCellVal = increaseMatrixCellVal(matrix, id);
    setNewMatrixData(matrixWithIncreasedCellVal);
  };

  const style = useMemo(() => {
    if (isPercentageMode)
      return {
        backgroundImage: `linear-gradient(to top,red ${getCellPersentage(
          row,
          data.value
        )}%,transparent 0%)`,
      };
    if (closestCellsIds.includes(data.id)) return { background: "yellow" };
  }, [isPercentageMode, closestCellsIds]);

  return (
    <td
      style={style}
      onMouseEnter={() =>
        handleEnterMouse(dataMatrix, closestCellsAmount, data.id)
      }
      onMouseLeave={() => onSearchClosestCells([])}
      onClick={() => increaseCellValByOne(dataMatrix, data.id)}
      className="blueCells"
    >
      {cellRender}
    </td>
  );
};

export default TableCell;
