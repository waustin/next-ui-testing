import { createTheme } from "@mui/material/styles";

import vars from "./base/_variables.module.scss";

export const theme = createTheme({
  palette: {
    primary: {
      main: vars.colorPrimary,
    },
  },
});
