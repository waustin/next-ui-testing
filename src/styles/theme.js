import { createTheme } from "@mui/material/styles";

import palette from "./base/_variables.module.scss";

export const theme = createTheme({
  palette: {
    primary: {
      main: palette.primary,
    },
  },
});
