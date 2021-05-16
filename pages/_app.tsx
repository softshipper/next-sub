import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@material-ui/core/CssBaseline";
import createCache from "@emotion/cache";
import theme from "../styles/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import * as _ from "lodash";

export const cache = createCache({ key: "css", prepend: true });


export default function MyApp(props: AppProps) {
    const { Component, pageProps } = props;

    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector("#jss-server-side");
        if (jssStyles) {
            jssStyles.parentElement!.removeChild(jssStyles);
        }
    }, []);

    return (
        <CacheProvider value={cache}>
            <Head>
                <title>Versioner</title>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </Head>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <ThemeProvider theme={theme}>
                <Container maxWidth="md">
                    <CssBaseline />
                    <Component {...pageProps} />
                </Container>
            </ThemeProvider>
        </CacheProvider>
    );
}



