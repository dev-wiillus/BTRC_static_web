import QuoteCarousel from "../QuoteCarousel";

export default function Quote() {
	return (
		<div className="flex flex-col gap-y-20 px-6 md:px-[40px]">
			<div className="flex flex-col text-[24px] font-bold md:flex-row md:justify-between md:text-[64px]">
				<div>
					<h1>순환 경제를 실천하는</h1>
					<h1>새로운 참여 문화.</h1>
				</div>
				<h1 className="mt-2 text-primary">
					<span className="font-chaney font-normal md:text-[72px]">#BTRC</span>
					와 시작됩니다.
				</h1>
			</div>
			<QuoteCarousel />
		</div>
	);
}
