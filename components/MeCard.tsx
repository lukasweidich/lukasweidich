import { Button, Card, Display, Grid, Link } from "@geist-ui/react";
import React from "react";
import Avatar from "./Avatar";
import { Mail, Github, Linkedin } from "@geist-ui/react-icons";

const MeCard: React.FC<Record<string, unknown>> = () => {
	const contacts = [
		{ href: "mailto:hi@lukasweidich.de", icon: <Mail /> },
		{ href: "https://linkedin.com/in/lukasweidich", icon: <Linkedin /> },
		{ href: "https://github.com/lukasweidich", icon: <Github /> },
	];

	return (
		<Card>
			<Display
				shadow
				caption="Hi, I'm Lukas! Computer Science Student and Software Developer."
			>
				<Avatar />
			</Display>
			<Grid.Container gap={1} alignItems="center" justify="center">
				{contacts.map((contact, i) => (
					<Grid key={i}>
						<Link color target="_blank" href={contact.href}>
							<Button icon={contact.icon} auto />
						</Link>
					</Grid>
				))}
			</Grid.Container>
		</Card>
	);
};

export default MeCard;
