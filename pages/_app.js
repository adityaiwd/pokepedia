import { useState, useEffect } from "react";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import Layout from "../components/Layout";
import client from "../graphql/client";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

import Loader from "../components/global/Loader";

const theme = {
  colors: {
    primary: "#ef233c",
    text: "#2b2d42",
    white: "#fff",
    black: "#000",
  },
};

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);
  useEffect(() => {
    const handleStart = () => {
      setPageLoading(true);
    };
    const handleComplete = () => {
      setPageLoading(false);
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);
  }, [router]);
  return (

    <ApolloProvider client={client}>
      
      <ThemeProvider theme={theme}>
        <Layout>
          {pageLoading ? (
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: '2rem'
              }}
            >
              <Loader />
            </div>
          ) : (
            <Component {...pageProps} />
          )}
          <ToastContainer />
        </Layout>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
