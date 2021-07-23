import Document, {
	Html,
	Head,
	Main,
	NextScript,
	DocumentContext,
} from "next/document";
import { CssBaseline } from "@geist-ui/react";

export default class extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);
		const styles = CssBaseline.flush();

		return {
			...initialProps,
			styles: (
				<>
					{initialProps.styles}
					{styles}
				</>
			),
		};
	}

	render() {
		return (
			<Html lang="en" dir="ltr">
				<Head>
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>

					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="theme-color" content="#FFFFFF" />
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/icons/apple-touch-icon.png"
					/>
					<link rel="manifest" href="/manifest.json" />
					<link rel="shortcut icon" href="/favicon.ico" />
				</Head>
				<body className="loading">
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
