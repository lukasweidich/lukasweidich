import { NextSeo } from "next-seo";
import React from "react";

const NotFoundPage = () => {
	return (
		<>
			<NextSeo
				title="404 - Page not found"
				description="A short description goes here."
			/>
			404 :(
		</>
	);
};

export default NotFoundPage;
