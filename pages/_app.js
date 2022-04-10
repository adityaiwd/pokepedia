import "../styles/globals.css";
import 'react-toastify/dist/ReactToastify.css';
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import Layout from "../components/Layout";
import client from "../graphql/client";
import { ToastContainer } from 'react-toastify';

const theme = {
  colors: {
    primary: "#ef233c",
    text: "#2b2d42",
    white: "#fff",
    black: "#000",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
          <ToastContainer />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
