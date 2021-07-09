import { NextSeo } from "next-seo";
import React from "react";

const ServerErrorPage = () => {
	return (
		<>
			<NextSeo
				title="500 - Server error"
				description="A short description goes here."
			/>
			500 :(
		</>
	);
};

export default ServerErrorPage;
