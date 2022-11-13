export default function Hero() {
	return (
		<div className="flex h-[800px] flex-col bg-[url('../public/images/main/bg_mobile.png')] md:h-[720px] md:bg-[url('../public/images/main/bg_web.png')]">
			<div className="mt-auto mb-20 mr-6 text-right text-[40px] md:mr-[40px] md:text-[80px] md:leading-[96px]">
				<p className="font-hero-hangle text-text-light-primary">
					<h1>
						지금 우리의 <br />
						리얼리-사이클
					</h1>
				</p>
				<p className="mt-1 font-chaney text-primary">
					<h1>#BTRC</h1>
				</p>
			</div>
		</div>
	);
}
