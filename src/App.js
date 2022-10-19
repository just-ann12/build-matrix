import "./utils/styles/main.scss";
import MatrixForm from "./components/MatrixForm";
import { useState } from "react";
import Table from "./components/Table";

const App = () => {
  const [settings, setSettings] = useState({
    columns: 0,
    rows: 0,
    cells: 0,
  });
  const [data, setData] = useState([]);
  const [closestCellsIds, setClosestCellsIds] = useState([]);

  const handleMatrixCreate = (data) => setData(data);
  const handleSearchClosestIds = (ids) => setClosestCellsIds(ids);

  return (
    <div className="App">
      <div className="wrap">
        <MatrixForm
          settings={settings}
          onSetSettings={setSettings}
          onCreateMatrix={handleMatrixCreate}
        />
        {!!data.length && (
          <Table
            data={data}
            setData={setData}
            closestCellsAmount={settings.cells}
            onSearchClosestCells={handleSearchClosestIds}
            closestCellsIds={closestCellsIds}
          />
        )}
      </div>
    </div>
  );
};

export default App;
