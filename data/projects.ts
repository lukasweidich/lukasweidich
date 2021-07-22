export type Project = {
	title: string;
	description: string;
	year: string;
	info: string;
	href?: string;
};

const projects: Array<Project> = [
	{
		title: "Detection of Snow on Photovoltaic Systems",
		description:
			"Executed Data Preparation, Data Consolidation, Feature Extraction and development of Machine Learning models using Python, Pandas, NumPy, Seaborn and Scikit-learn.",
		year: "2021",
		info: "Data Mining Project at University",
	},
	{
		title: "BottleTaxi",
		description:
			"Designed and developed an E-commerce store for a beverage and food delivery service based in Osnabrueck, Germany using TypeScript, Next.js, React.js, Redux and MongoDB.",
		year: "2020 - 2021",
		info: "Project at QUIKK",
		href: "https://bottle.taxi",
	},
	{
		title: "Auction Template",
		description:
			"Created an automated, customizable eBay product description generator. Built with TypeScript, React.js, Redux, and MongoDB, using official eBay API endpoints.",
		year: "2020 - 2021",
		info: "Side Project",
		href: "https://github.com/lukasweidich/auction-template",
	},
	{
		title: "QUIKK Software Website",
		description:
			"Co-founded QUIKK Software & Webdesign UG (haftungsbeschraenkt) in 2020. To set up the website, we used React.js, TypeScript, Next.js and Strapi as a headless CMS.",
		year: "2021",
		info: "Project at QUIKK",
		href: "https://quikk.de",
	},
	{
		title:
			"Increasing predictability of sales in e-commerce through ML methods",
		description:
			"Used eBay’s API to get detailed information about sold advertisements. Preprocessed Data and developed Machine Learning models with Python, Pandas, NumPy, Seaborn and Scikit-learn.",
		year: "2021",
		info: "Machine Learning Project at University",
	},
	{
		title: "Coursera IBM Data Science Professional Certificate",
		description:
			"Gained hands-on experience in Data Science using Python and SQL. Performed Data Visualization and Data Analysis, also created Machine Learning models.",
		year: "2020",
		info: "Self-directed Learning",
		href: "https://github.com/lukasweidich/Coursera_Capstone",
	},

	{
		title: "LaTeX Resume and Coverletter Template",
		description:
			"My own LaTeX template for creating a modern cv and coverletter, based on Awesome-CV.",
		year: "2021",
		info: "Side Project",
		href: "https://github.com/lukasweidich/cv-template",
	},
	{
		title: "lukasweidich.de",
		description:
			"The site you are on right now was developed with React.js, TypeScript and Geist UI.",
		year: "2021",
		info: "Side Project",
		href: "https://github.com/lukasweidich/lukasweidich",
	},
];

export default projects;
