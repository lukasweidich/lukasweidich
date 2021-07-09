import { NextSeo } from "next-seo";
import Head from "next/head";
import React from "react";

const index = () => {
	return (
		<>
			<NextSeo
				title="Lukas Weidich"
				description="A short description goes here."
			/>
			<Head>
				<meta
					name="viewport"
					content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
				/>
			</Head>
			Lukas Weidich
		</>
	);
};

export default index;
