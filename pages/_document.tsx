import Document, { Html, Head, Main, NextScript } from "next/document";

class BTRCDocument extends Document {
	render() {
		return (
			<Html lang="ko">
				<Head>
					<meta
						name="naver-site-verification"
						content="83b299052fa5558c1f2de5087c620c2b4816ce7f"
					/>
				</Head>
				<body className="font-pretendard">
					<Main />
					<NextScript />
					<div id="notifications"></div>
				</body>
			</Html>
		);
	}
}

export default BTRCDocument;
