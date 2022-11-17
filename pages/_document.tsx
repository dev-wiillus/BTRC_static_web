import Document, { Html, Head, Main, NextScript } from "next/document";

class BTRCDocument extends Document {
	render() {
		return (
			<Html lang="ko">
				<Head />
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
