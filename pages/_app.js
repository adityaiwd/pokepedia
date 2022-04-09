import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import Layout from "../components/layout";
import client from "../graphql/client";

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
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
