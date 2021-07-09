import { NextSeo } from "next-seo";
import React from "react";

const _offline = () => {
	return (
		<div>
			<NextSeo
				title="You&aposre offline"
				description="A short description goes here."
			/>
			You&aposre offline :(
		</div>
	);
};

export default _offline;
