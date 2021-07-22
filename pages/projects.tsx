import { NextSeo } from "next-seo";
import React from "react";
import ProjectsSection from "../components/ProjectsSection";

const projects = () => {
	return (
		<>
			<NextSeo
				title="Lukas Weidich"
				description="A short description goes here."
			/>
			<ProjectsSection />
		</>
	);
};

export default projects;
