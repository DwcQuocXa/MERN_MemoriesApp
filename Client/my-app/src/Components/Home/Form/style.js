import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      //margin: theme.spacing(1),
      margin: "10px",
    },
  },
  paper: {
    //padding: theme.spacing(2),
    padding: "16px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: 10,
  },
  buttonClear: {
    marginBottom: "10px",
    color: "#ff004a",
  },
}));
