import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material";

import "@/styles/globals.scss";

const theme = createTheme({
  typography: {
    fontFamily: "'Noto Sans KR', 'Roboto', 'sans-serif'",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
