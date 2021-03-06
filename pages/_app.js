import { useState, useEffect } from "react";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";

import { PokepediaProvider } from "../provider/context";
import client from "../graphql/client";
import Layout from "../components/Layout";
import { theme } from "../components/global/Global";
import Loader from "../components/global/Loader";

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
      <PokepediaProvider>
        <ThemeProvider theme={theme}>
          <Layout>
            {pageLoading ? (
              <Loader
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "2rem",
                }}
              />
            ) : (
              <Component {...pageProps} />
            )}
            <ToastContainer />
          </Layout>
        </ThemeProvider>
      </PokepediaProvider>
    </ApolloProvider>
  );
}

export default MyApp;
