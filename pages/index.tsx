import { Card, Description, Grid, Text } from "@geist-ui/react";
import { NextSeo } from "next-seo";
import React from "react";
import MeCard from "../components/MeCard";

const index = () => {
	return (
		<>
			<NextSeo
				title="Lukas Weidich"
				description="Lukas Weidich - Computer Science Student and Software Developer."
			/>
			<Text h2>About Me</Text>
			<Grid.Container gap={2} className="about">
				<Grid xs={24} sm={12} md={8}>
					<MeCard />
				</Grid>
				<Grid xs={24} sm={12} md={16}>
					<Grid.Container gap={2}>
						<Grid xs={24}>
							<Card>
								<Description title="TL;DR" />
								<Text type="secondary" small>
									<ul>
										<li>Software Developer</li>
										<li>M.Sc. Computer Science Student</li>
										<li>
											{new Date().getFullYear() - 2018}+ years of professional
											experience
										</li>
									</ul>
								</Text>
							</Card>
						</Grid>
						<Grid xs={24}>
							<Card>
								<Description title="Knowledge" />
								<Text type="secondary" small>
									<ul>
										<li>TypeScript/JavaScript (ES6+), Python, SQL</li>
										<li>
											Node.js, React.js (Next.js), Redux, Pandas, Numpy, Git
										</li>
										<li>German (native), English (C2), French (B1)</li>
									</ul>
								</Text>
							</Card>
						</Grid>
						<Grid xs={24}>
							<Card>
								<Description title="Interests" />
								<Text type="secondary" small>
									<ul>
										<li>
											Sports, especially running (PB half-marathon: 02:21:03)
										</li>
										<li>Personal finance, investing and the stock market</li>
										<li>Self-management, productivity</li>
									</ul>
								</Text>
							</Card>
						</Grid>
					</Grid.Container>
				</Grid>
			</Grid.Container>
		</>
	);
};

export default index;
