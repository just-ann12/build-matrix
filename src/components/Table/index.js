import CustomButton from "../shared/CustomButton";
import "./index.scss";
const Table = () => {
  return (
    <div className="matrix-wrap">
      <div className="btn-wrap">
        <CustomButton
          className="addRowBtn"
          title="Add row"
          onClick={() => {}}
        />
      </div>
      <table className="matrix">
        <thead>
          <tr>
            <th>№</th>
            <th>1</th>
            <th>Sum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <th>100</th>
            <th>100</th>
            <th>X</th>
          </tr>
          <tr>
            <th>Avg</th>
            <th>100</th>
            <th>100</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
