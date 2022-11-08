import { Input } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { MUI_INPUT_STYLES } from "./styles";

const muiStyles = makeStyles(MUI_INPUT_STYLES);

const CustomInput = ({ type = "text", value, onChange }) => {
  const classes = muiStyles();

  return (
    <Input
      className={classes.root}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
};
export default CustomInput;
