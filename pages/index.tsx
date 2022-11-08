export default function Home(props: any) {
	return (
		<div>
			<div className="hero h-[800px]">
				<div className="text-3xl font-bold">
					<h1>지금 우리의 리얼리-사이클 #BTRC</h1>
				</div>
			</div>
			<div className="how-to-use h-[800px]">
				<div className="text-3xl font-bold">
					<h1>해볼래?</h1>
					<h1>누구나 할 수 있어.</h1>
				</div>
			</div>
			<div className="who-we-are h-[800px]">
				<div className="text-3xl font-bold">
					<h1>가장 쉬운 실천,</h1>
					<h1>Free Drink와 함께</h1>
					<h1>#BTRC</h1>
				</div>
			</div>
			<div className="esg h-[800px]">
				<div className="text-3xl font-bold">
					<h1>텀블러와 함께</h1>
					<h1>하루 1번</h1>
					<h1>2년이면</h1>
				</div>
			</div>
			<div className="participating-brands">
				<div className="text-3xl font-bold">
					<h1>#BTRC 참여 브랜드</h1>
				</div>
			</div>
			<div className="quote">
				<div className="text-3xl font-bold">
					<h1>순환 경제를 실천하는</h1>
					<h1>새로운 참여 문화.</h1>
					<h1>#BTRC와 시작됩니다.</h1>
				</div>
			</div>
			<div className="new-project">
				<div className="text-3xl font-bold">
					<h1>텀블러 기부하고 수익까지!</h1>
					<h1>#BTRC의 신규 프로젝트에</h1>
					<h1>함께 해보세요.</h1>
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
	// fetch data from an API

	return {
		props: {},
	};
}
