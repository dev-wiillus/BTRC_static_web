// TODO:client side performance optimization
// TOOD: 사용자가 보지않을 때 잡아내기. animation-play-state 확인
export default function Guide() {
	return (
		<div
			id="guideFlip"
			className="relative mt-12 flex h-screen max-h-screen min-h-screen flex-col items-center justify-center overflow-hidden text-center text-[40px] font-bold leading-[44px]"
		>
			{/* <div className="absolute animate-[fadeInFadeOut1_16s_linear_infinite]">
				<h1>해볼래?</h1>
				<h1>누구나 할 수 있어.</h1>
			</div> */}
			{/* <div className="absolute animate-[fadeInFadeOut2_16s_linear_infinite] overflow-hidden p-[20px]"> */}
			<div className="absolute overflow-hidden p-[20px]">
				<div className="animate-[circleSize_8s_linear_infinite] rounded-full border border-border-circle text-[24px] leading-[28px] text-text-secondary md:h-[420px] md:w-[420px]">
					<div className="absolute inset-0 m-auto animate-[mobileCircleText1_8s_linear_infinite] text-center md:animate-[webCircleText1_8s_linear_infinite]">
						<span className="absolute inset-0 m-auto h-8 w-72 animate-[textAngle1_8s_linear_infinite] bg-white">
							받고,
						</span>
					</div>
					<div className="absolute inset-0 m-auto animate-[mobileCircleText2_8s_linear_infinite] text-center md:animate-[webCircleText2_8s_linear_infinite]">
						<span className="absolute inset-0 m-auto h-8 w-72 animate-[textAngle2_8s_linear_infinite] bg-white">
							즐기고,
						</span>
					</div>
					<div className="absolute inset-0 m-auto animate-[mobileCircleText3_8s_linear_infinite] text-center md:animate-[webCircleText3_8s_linear_infinite]">
						<span className="absolute inset-0 m-auto h-8 w-72 animate-[textAngle3_8s_linear_infinite] bg-white">
							반납하고,
						</span>
					</div>
					<div className="absolute left-1/2 top-1/3 h-[72px] w-[127px] -translate-x-1/2 -translate-y-1/3">
						<div className="text-[20px] font-bold leading-[24px] text-secondary">
							<span className="absolute left-1/2 top-1/2 h-[72px] w-[127px] -translate-x-1/2 -translate-y-1/2 animate-[circleInnerText1_8s_linear_infinite]">
								원하는 텀블러에
								<br />
								무료커피 받고
							</span>
							<span className="absolute left-1/2 top-1/2 h-[72px] w-[127px] -translate-x-1/2 -translate-y-1/2 animate-[circleInnerText2_8s_linear_infinite]">
								일주일간
								<br />
								즐기고
							</span>
							<span className="absolute left-1/2 top-1/2 h-[72px] w-[127px] -translate-x-1/2 -translate-y-1/2 animate-[circleInnerText3_8s_linear_infinite]">
								BTRC 스팟에
								<br />
								반납하고
							</span>
						</div>
					</div>
				</div>
			</div>
			{/* <div className="absolute animate-[fadeInFadeOut3_16s_linear_infinite]">
				<h1 className="mb-4 text-[32px] font-medium md:hidden">그리고</h1>
				<h1>세척과 살균은</h1>
				<h1>
					<span className="font-chaney text-[36px]">BTRC</span>가
					<span className="hidden md:block"> 해줄게.</span>
				</h1>
			</div> */}
		</div>
	);
}
