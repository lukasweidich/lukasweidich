import { NextSeo } from "next-seo";
import React from "react";

const _offline = () => {
	return (
		<div>
			<NextSeo
				title="You're offline"
				description="Please check your internet connection."
			/>
			You're offline :(
		</div>
	);
};

export default _offline;
