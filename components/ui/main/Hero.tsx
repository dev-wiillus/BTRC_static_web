import Container from "../Hero/Container";

export default function Hero() {
	return (
		<Container
			title="btrc"
			bgSrcMobile="/images/main/bg_mobile.jpg"
			bgSrcWeb="/images/main/bg_web.jpg"
		>
			<div className="mt-auto mb-20 mr-6 text-right text-[40px] leading-[49px] md:mr-[40px] md:text-[80px] md:leading-[98px]">
				<div>
					<h1 className="font-hero-hangle text-text-light-primary">
						지금 우리의 <br />
						리얼리-사이클
					</h1>
					<h1 className="mt-1 font-chaney text-primary">#BTRC</h1>
				</div>
			</div>
		</Container>
	);
}
