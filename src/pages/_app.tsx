import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material";

import "@/styles/globals.scss";
import "@/styles/mixin.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const theme = createTheme({
  typography: {
    fontFamily: "'Noto Sans KR', 'Roboto', 'sans-serif'",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
