import "inter-ui/inter.css";
import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { GeistProvider, CssBaseline } from "@geist-ui/react";

const _app = ({ Component, pageProps }: AppProps) => {
	return (
		<GeistProvider>
			<CssBaseline />
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
				/>
			</Head>
			<Component {...pageProps} />
		</GeistProvider>
	);
};

export default _app;
