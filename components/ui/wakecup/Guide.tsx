import Image from "next/image";
import useRevealAnimation from "../../utils/useRevealAnimation";

export default function Guide() {
	useRevealAnimation();

	return (
		<div className="flex flex-col items-center gap-y-[100px] pt-20 pb-[120px] text-center text-[24px] font-semibold md:gap-y-[160px] md:py-40 md:text-[40px] md:text-4xl md:font-bold">
			<div className="reveal fade-bottom flex flex-col text-[40px] font-bold leading-[44px] md:flex-row md:gap-x-2">
				<h1>텀블러, 공유하고</h1>
				<h1>수익까지.</h1>
			</div>
			<div className="grid grid-cols-1 gap-y-[100px] md:grid-cols-2 md:gap-x-8">
				<div className="flex flex-col items-center md:rounded-[30px] md:bg-[#EAF4EC] md:px-[80px] md:pt-[69px] md:pb-[43px]">
					<div className="reveal fade-bottom">
						<div className="md:hidden">
							<Image
								src="/images/wakecup/usage_mobile.png"
								alt="wakecup-usage"
								width={232}
								height={147}
							/>
						</div>
						<div className="hidden md:block">
							<Image
								src="/images/wakecup/usage_web.png"
								alt="wakecup-usage"
								width={368}
								height={247}
							/>
						</div>
					</div>
					<div className="reveal fade-bottom-text mt-10">
						<p>몇 번 사용되었는지</p>
						<p>한눈에!</p>
					</div>
				</div>
				<div className="flex flex-col items-center md:rounded-[30px] md:bg-[#EAF4EC] md:px-[80px] md:pt-[69px] md:pb-[43px]">
					<div className="reveal fade-bottom">
						<div className="md:hidden">
							<Image
								src="/images/wakecup/revenue_mobile.png"
								alt="wakecup-usage"
								width={200}
								height={157}
							/>
						</div>
						<div className="hidden md:block">
							<Image
								src="/images/wakecup/revenue_web.png"
								alt="wakecup-usage"
								width={328}
								height={259}
							/>
						</div>
					</div>
					<div className="reveal fade-bottom-text mt-10">
						<p>쓰여진 횟수만큼</p>
						<p>매년 수익금이 착!</p>
						<p className="mt-4 text-[16px] text-primary">
							매출의 일부를 수익으로 나눠드립니다.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
