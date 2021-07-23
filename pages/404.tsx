import { NextSeo } from "next-seo";
import React from "react";

const NotFoundPage = () => {
	return (
		<>
			<NextSeo title="404 - Page not found" description="Page not found" />
			404 :(
		</>
	);
};

export default NotFoundPage;
