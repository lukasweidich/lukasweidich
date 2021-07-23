import "inter-ui/inter.css";
import React, { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { GeistProvider, CssBaseline, Page } from "@geist-ui/react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/globals.css";

const _app = ({ Component, pageProps }: AppProps) => {
	useEffect(() => {
		document?.body?.classList?.remove("loading");
	}, []);

	return (
		<GeistProvider>
			<Page dotBackdrop>
				<CssBaseline />
				<Head>
					<meta
						name="viewport"
						content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
					/>
				</Head>
				<Header />
				<Component {...pageProps} />
				<Page.Footer>
					<Footer />
				</Page.Footer>
			</Page>
		</GeistProvider>
	);
};

export default _app;
