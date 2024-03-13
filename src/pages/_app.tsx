import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material";

import "@/styles/globals.scss";
import "@/styles/mixin.scss";
import { Provider } from "jotai";

const theme = createTheme({
  typography: {
    fontFamily: "'Noto Sans KR', 'Roboto', 'sans-serif'",
  },
});

console.log(
  " __  __                                                     \n/\\ \\/\\ \\                                __                  \n\\ \\ \\_\\ \\     ___     ___       __     /\\_\\     __  __  __  \n \\ \\  _  \\   / __`\\ /' _ `\\   /'_ `\\   \\/\\ \\   /\\ \\/\\ \\/\\ \\ \n  \\ \\ \\ \\ \\ /\\ \\L\\ \\/\\ \\/\\ \\ /\\ \\L\\ \\   \\ \\ \\  \\ \\ \\_/ \\_/ \\\n   \\ \\_\\ \\_\\\\ \\____/\\ \\_\\ \\_\\\\ \\____ \\  _\\ \\ \\  \\ \\___x___/'\n    \\/_/\\/_/ \\/___/  \\/_/\\/_/ \\/___L\\ \\/\\ \\_\\ \\  \\/__//__/  \n                                /\\____/\\ \\____/             \n                                \\_/__/  /___/              \n\\_______  _____________________________________________/\n        \\/\n두다다다다다다다\n두다다다다다다다\n　(∩`・ω・)\n＿/_ミつ/￣￣￣/\n　　＼/＿＿＿/\n"
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
