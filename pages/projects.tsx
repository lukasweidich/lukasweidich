import { NextSeo } from "next-seo";
import React from "react";
import ProjectsSection from "../components/ProjectsSection";

const projects = () => {
	return (
		<>
			<NextSeo title="Projects" description="Lukas Weidich - Projects." />
			<ProjectsSection />
		</>
	);
};

export default projects;
