import { Text } from "@geist-ui/react";
import { NextSeo } from "next-seo";
import React from "react";
import MeCard from "../components/MeCard";

const index = () => {
	return (
		<>
			<NextSeo
				title="Lukas Weidich"
				description="A short description goes here."
			/>
			<Text h2>About Me</Text>
			<MeCard />
		</>
	);
};

export default index;
