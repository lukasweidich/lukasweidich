import React from "react";
import type { AppProps } from "next/app";
import Head from "next/head";

const _app = ({ Component, pageProps }: AppProps) => {
	return (
		<>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
				/>
			</Head>
			<Component {...pageProps} />
		</>
	);
};

export default _app;
