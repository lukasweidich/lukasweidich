import { Card, Description, Link, Text } from "@geist-ui/react";
import React from "react";
import { Project } from "../data/projects";

const ProjectCard: React.FC<Project> = ({
	title,
	description,
	href,
	year,
	info,
}) => {
	const linked = !!href;

	return (
		<Card
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}
		>
			<Text h3>{title}</Text>
			<Description title={`${info}, ${year}`} />
			<Text type="secondary" small>
				{description}
			</Text>
			<Card.Footer>
				{linked ? (
					<Link color target="_blank" href={href}>
						Visit project for more details.
					</Link>
				) : (
					<Text>Not publicly accessible.</Text>
				)}
			</Card.Footer>
		</Card>
	);
};

export default ProjectCard;
