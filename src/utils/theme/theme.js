import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  shape: {
    borderRadius: 10,
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "pink" },
          style: {
            backgroundColor: "rgb(247, 60, 166)",
            marginTop: "15px",
          },
        },
        {
          props: { variant: "green" },
          style: {
            backgroundColor: "rgb(10, 73, 15)",
            color: "#fff",
            margin: "15px 0",
          },
        },
      ],
    },

    MuiTableCell: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          fontSize: "1.2rem",
          fontWeight: "500",
          borderBottom: "none",
          textAlign: "center",
        },
      },
      variants: [
        {
          props: { variant: "blue" },
          style: {
            backgroundColor: "rgb(42, 192, 221)",
            color: "#000",
          },
        },
        {
          props: { variant: "green" },
          style: {
            backgroundColor: "rgb(25, 146, 97)",
            color: "#fff",
          },
        },
      ],
    },
  },
});

export default theme;
