export default function Hero() {
	return (
		<div className="flex h-screen flex-col bg-[url('../public/images/partnership/bg_mobile.png')] md:h-[720px] md:bg-[url('../public/images/partnership/bg_web.png')]">
			<div className="mt-auto mb-[78px] mr-[24px] text-right text-[40px] leading-[49px] md:mb-[40px] md:mr-[40px] md:text-[80px] md:leading-[98px]">
				<div>
					<h1 className="whitespace-pre-line font-hero-hangle text-text-light-primary">
						누구보다 <br />
						가까이
					</h1>
					<h1 className="font-chaney text-primary">#BTRC</h1>
				</div>
			</div>
		</div>
	);
}
