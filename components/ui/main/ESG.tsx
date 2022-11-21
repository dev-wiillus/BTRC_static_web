import Image from "next/image";

export default function ESG() {
	return (
		<div className="flex h-[800px] flex-col items-center gap-y-12 pt-[4.5rem] md:h-[720px] md:gap-y-8 md:pt-[64px]">
			<div className="text-center">
				<div className="flex flex-col justify-center text-[32px] leading-[40px] md:flex-row md:gap-x-2 md:text-[28px]">
					<h1 className="font-normal">텀블러와 함께</h1>
					<h1 className="font-black">하루 1번 2년이면</h1>
				</div>
				<div className="mt-8 flex flex-col justify-center text-[40px] font-bold leading-[44px] text-secondary md:mt-[8px] md:flex-row md:gap-x-2">
					<h1 className="font-medium">온실가스 발생량</h1>
					<h1 className="font-black">33배 감소</h1>
				</div>
			</div>
			<div className="relative flex w-full justify-center bg-bg-primary md:h-[520px]">
				<div className="h-[520px] w-[360px] md:hidden">
					<Image
						src="/images/main/chart_esg_mobile.png"
						width={360}
						height={520}
						alt="chart-esg-mobile"
					/>
				</div>
				<div className="mt-[32px] hidden h-[520px] w-full flex-col items-center md:flex">
					<Image
						src="/images/main/chart_esg_web.png"
						width={477}
						height={412}
						alt="chart-esg-web"
					/>
				</div>
				<span className="absolute bottom-[16px] left-[24px] hidden text-sm font-medium text-text-gray-primary md:block">
					출처: 기후변화행동연구소
				</span>
			</div>
		</div>
	);
}
