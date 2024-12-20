import { createTheme } from "@mui/material/styles";

export const Colors = {
  primary: "#054bf0",
  secondary: "#054bf0",
  white: "#fff",
};

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary,
    },
    secondary: {
      main: Colors.secondary,
    },
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: Colors.white,
        },
      },
    },
  },
});

export default theme;
