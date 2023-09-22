import { MantineProvider, createTheme } from '@mantine/core';
import '@mantine/core/styles.css';
import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";

const theme = createTheme({
  /** Put your mantine theme override here */
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <MantineProvider theme={theme}>
      <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
