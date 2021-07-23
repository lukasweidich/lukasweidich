import { Button, Card, Display, Grid, Link } from "@geist-ui/react";
import React from "react";
import Avatar from "./Avatar";
import { Mail, Github, Linkedin } from "@geist-ui/react-icons";

const MeCard: React.FC<Record<string, unknown>> = () => {
	const contacts = [
		{ href: "mailto:hi@lukasweidich.de", icon: <Mail />, label: "E-Mail" },
		{
			href: "https://linkedin.com/in/lukasweidich",
			icon: <Linkedin />,
			label: "LinkedIn",
		},
		{
			href: "https://github.com/lukasweidich",
			icon: <Github />,
			label: "GitHub",
		},
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
						<Link
							color
							target="_blank"
							rel="noopener"
							href={contact.href}
							title={contact.label}
						>
							<Button icon={contact.icon} auto aria-label={contact.label} />
						</Link>
					</Grid>
				))}
			</Grid.Container>
		</Card>
	);
};

export default MeCard;
