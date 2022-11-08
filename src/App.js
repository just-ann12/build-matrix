import { useSelector } from "react-redux";
import MatrixForm from "./components/MatrixForm";
import CustomTable from "./components/Table";
import { getMatrixDataSelector } from "./store/matrix-reducer/selectors";
import { ThemeProvider} from "@mui/material/styles";
import theme from "./utils/theme/theme";
import "./utils/styles/main.scss";

const App = () => {
  const data = useSelector(getMatrixDataSelector);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <div className="wrap">
          <MatrixForm />
          {!!data.length && <CustomTable />}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
