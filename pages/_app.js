import "../styles/globals.css";
import { ThemeProvider } from "@emotion/react";
import Layout from "../components/layout";

const theme = {
  colors: {
    primary: '#ef233c',
    text: '#2b2d42',
    white: '#fff',
    black: '#000',
  }
}

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
