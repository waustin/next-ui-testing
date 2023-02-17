import '@/styles/globals.scss'
import { ThemeProvider } from "@mui/material";
import { theme } from "../styles/theme";

import type { AppProps } from 'next/app'
import CssBaseline from "@mui/material/CssBaseline";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
