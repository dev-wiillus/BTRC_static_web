export default function ESG() {
	return (
		<div className="flex h-[800px] flex-col items-center gap-y-12 bg-[url('../public/images/main/bg_esg_mobile.png')] pt-[4.5rem] md:h-[720px] md:gap-y-8 md:bg-[url('../public/images/main/bg_esg_web.png')] md:pt-[3rem]">
			<div className="text-center">
				<h1 className="text-[32px] font-medium leading-[40px]">
					텀블러와 함께
				</h1>
				<div className="flex flex-col text-[40px] font-bold leading-[44px] md:flex-row md:gap-x-4">
					<h1>하루 1번</h1>
					<h1>2년이면</h1>
				</div>
			</div>
			<div className="flex flex-col gap-y-2 text-right">
				<div className="relative h-[487px] w-[312px] bg-[url('../public/images/main/chart_esg_mobile.png')] md:h-[487px] md:w-[432px] md:bg-[url('../public/images/main/chart_esg_web.png')]" />

				<span className="text-sm font-medium text-text-gray-primary">
					출처: 기후변화행동연구소
				</span>
			</div>
		</div>
	);
}
