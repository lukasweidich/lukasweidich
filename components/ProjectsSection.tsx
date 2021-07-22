import { Grid, Link, Text } from "@geist-ui/react";
import React from "react";
import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

const ProjectsSection: React.FC<Record<string, unknown>> = () => {
	return (
		<>
			<Text h2>Projects</Text>
			<Grid.Container gap={2}>
				{projects.map((project, i) => (
					<Grid xs={24} md={12} key={i}>
						<ProjectCard {...project} />
					</Grid>
				))}
				<Grid xs={24}>
					<Text span>
						For more projects, please visit{" "}
						<Link color target="_blank" href="https://github.com/lukasweidich">
							my GitHub account
						</Link>
						.
					</Text>
				</Grid>
			</Grid.Container>
		</>
	);
};

export default ProjectsSection;
