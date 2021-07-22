import { Tabs, Text } from "@geist-ui/react";
import { useRouter } from "next/dist/client/router";
import React from "react";
import { HEADER_LINKS } from "../data/common";

const Header: React.FC<Record<string, unknown>> = () => {
	const router = useRouter();

	const pathnames = Object.values(HEADER_LINKS);

	if (router.pathname !== "/") {
		pathnames.splice(pathnames.indexOf("/"), 1);
	}

	const currentPathname = pathnames.find((pathname) =>
		router.pathname.startsWith(pathname),
	);

	return (
		<>
			<Text h1 size={24.3}>
				Lukas Weidich{" "}
				<Text type="secondary" small>
					.de
				</Text>
			</Text>
			<Tabs
				initialValue={router.pathname}
				value={currentPathname ?? router.pathname}
				onChange={(pathname) => router.push(pathname)}
				hideDivider
			>
				{Object.entries(HEADER_LINKS).map(([key, value]) => (
					<>
						<Tabs.Item key={key} label={key} value={value} />
					</>
				))}
			</Tabs>
		</>
	);
};

export default Header;
