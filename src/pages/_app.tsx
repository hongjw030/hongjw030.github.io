import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material";

import "@/styles/globals.scss";
import "@/styles/mixin.scss";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "jotai";
import { Suspense } from "react";
import InitialComponent from "@/components/initialComponent/InitialComponent";

const queryClient = new QueryClient();

const theme = createTheme({
  typography: {
    fontFamily: "'Noto Sans KR', 'Roboto', 'sans-serif'",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Suspense fallback="Loading...">
          <ThemeProvider theme={theme}>
            <InitialComponent />
            <Component {...pageProps} />
          </ThemeProvider>
        </Suspense>
      </Provider>
    </QueryClientProvider>
  );
}
