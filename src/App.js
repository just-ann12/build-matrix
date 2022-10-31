import { useSelector } from "react-redux";
import "./utils/styles/main.scss";
import MatrixForm from "./components/MatrixForm";
import Table from "./components/Table";
import { getMatrixDataSelector } from "./store/matrix-reducer/selectors";

const App = () => {
  const data = useSelector(getMatrixDataSelector);

  return (
    <div className="App">
      <div className="wrap">
        <MatrixForm />
        {!!data.length && <Table />}
      </div>
    </div>
  );
};

export default App;
