import CustomButton from "../shared/CustomButton";
import "./index.scss";
import TableRow from "./TableRow";
import RowAverageVal from "./RowAverageVal";
import { nanoid } from "nanoid";

const Table = ({
  data,
  setData,
  closestCellsAmount,
  onSearchClosestCells,
  closestCellsIds,
}) => {
  const handleRowAdding = (row) => setData([...data, row]);
  const setNewMatrixData = (data) => setData(data);

  const addRow = (data) => {
    const row = Array(data[0].length)
      .fill(null)
      .map(() => ({
        id: nanoid(),
        value: Math.round(100 - 0.5 + Math.random() * (1000 - 100 + 1)),
      }));
    handleRowAdding(row);
  };

  return (
    <div className="matrix-wrap">
      <div className="btn-wrap">
        <CustomButton
          className="addRowBtn"
          title="Add row"
          onClick={() => addRow(data)}
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
            <TableRow
              dataMatrix={data}
              row={row}
              closestCellsAmount={closestCellsAmount}
              key={index}
              rowNumber={index + 1}
              onSearchClosestCells={onSearchClosestCells}
              closestCellsIds={closestCellsIds}
              setNewMatrixData={setNewMatrixData}
            />
          ))}
          <RowAverageVal data={data} />
        </tbody>
      </table>
    </div>
  );
};

export default Table;
