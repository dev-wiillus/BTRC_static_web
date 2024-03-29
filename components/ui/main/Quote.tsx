import QuoteCarousel from "../QuoteCarousel";

export default function Quote() {
	return (
		<div className="my-[120px] flex flex-col px-6 md:my-[160px] md:gap-y-20 md:px-[40px]">
			<div className="flex flex-col text-[24px] font-bold md:justify-between md:text-[64px] md:leading-[76.8px] lg:flex-row">
				<div>
					<h1>순환 경제를 실천하는</h1>
					<h1>새로운 참여 문화.</h1>
				</div>
				<h1 className="mt-2 flex flex-row items-baseline gap-x-2 text-end text-primary md:mt-8 md:items-end lg:mt-0 lg:flex-col">
					<div className="flex items-baseline gap-x-2">
						<span className="font-chaney font-normal md:text-[72px]">
							#BTRC
						</span>
						와
					</div>
					<span>시작됩니다.</span>
				</h1>
			</div>
			<QuoteCarousel />
		</div>
	);
}
