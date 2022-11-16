export default function Guide() {
	return (
		<div className="flex flex-col items-center pt-20 text-center text-[24px] font-semibold md:text-[40px] md:text-4xl md:font-bold">
			<div className="flex flex-col gap-y-28">
				<div>
					<p>사용하지 않는 텀블러가</p>
					<p>가치를 갖기 시작합니다.</p>
				</div>
				<div className="relative h-[99px] w-[360px] bg-[url('../public/images/wakecup/tumblers_mobile.png')] md:h-[242px] md:w-[1280px] md:bg-[url('../public/images/wakecup/tumblers_web.png')]" />

				<div className="mt-20">당신의 잠든 텀블러를 기부하세요.</div>
			</div>
			<div className="mt-40 grid grid-cols-1 gap-y-40 md:grid-cols-2 md:gap-x-8">
				<div className="flex flex-col items-center md:bg-bg-primary md:px-[100px] md:pt-[63px] md:pb-[29px]">
					<div className="relative h-[157px] w-[200px] bg-[url('../public/images/wakecup/revenue_mobile.png')] md:h-[259px] md:w-[328px] md:bg-[url('../public/images/wakecup/revenue_web.png')]" />

					<div className="mt-20">
						<p>쓰여진 횟수만큼</p>
						<p>매년 수익금이 착!</p>
					</div>
					<div className="mt-4 text-[16px] text-primary">
						매출의 일부를 수익으로 나눠드립니다.
					</div>
				</div>
				<div className="flex flex-col items-center md:bg-bg-primary md:px-[80px] md:pt-[69px] md:pb-[43px]">
					<div className="relative h-[147px] w-[232px] bg-[url('../public/images/wakecup/usage_mobile.png')] md:h-[247px] md:w-[368px] md:bg-[url('../public/images/wakecup/usage_web.png')]" />

					<div className="mt-20">
						<p>몇 번 사용되었는지</p>
						<p>한눈에!</p>
					</div>
				</div>
			</div>
		</div>
	);
}
