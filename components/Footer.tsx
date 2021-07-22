import { Text } from "@geist-ui/react";
import React from "react";

const Footer: React.FC<Record<string, unknown>> = () => {
	return (
		<Text p small type="secondary">
			© {new Date().getFullYear()} Lukas Weidich
		</Text>
	);
};

export default Footer;
