import makeStyles from "@mui/styles/makeStyles";
import { Button } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import buttonTheme from "../../../utils/theme/theme";
import { MUI_BUTTON_STYLES } from "./styles";

const useStyles = makeStyles(MUI_BUTTON_STYLES);

const CustomButton = ({ variant, onClick, title }) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={buttonTheme}>
      <Button variant={variant} className={classes.root} onClick={onClick}>
        {title}
      </Button>
    </ThemeProvider>
  );
};

export default CustomButton;
