import Button from "../components/ui/Button";
import WakecupApplication from "../components/ui/modal/WakecupApplication";

export default function WakecupPage() {
	return (
		<>
			<div className="flex h-screen flex-col bg-[url('../public/images/wakecup/bg_mobile.png')] md:h-[720px] md:bg-[url('../public/images/wakecup/bg_web.png')]">
				<div className="mt-auto mb-20 ml-6 md:mb-10 md:mr-10 md:ml-auto md:text-right">
					<p className="whitespace-pre-line font-hero-hangle text-[40px] text-text-light-primary md:text-[80px]">
						<h1>
							잠든 가치를 <br />
							깨우는 움직임
						</h1>
					</p>
					<p className="mt-1 font-chaney text-[32px] text-primary md:text-[80px]">
						<h1>#WAKECUP</h1>
					</p>
					<label
						htmlFor="my-modal-3"
						className="btn-primary btn mt-10 md:hidden"
					>
						사전 예약하기
					</label>
				</div>
			</div>
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
			<div className="grid grid-cols-1 gap-y-10 px-6 pt-40 pb-20 text-[24px] font-bold md:grid-cols-2 md:items-center md:px-10 md:pb-40 md:pt-[200px] md:text-[40px]">
				<div className="break-keep">
					당신과 곧 만날
					<br />
					<span className="font-chaney font-normal md:text-[38px]">
						#WAKECUP
					</span>{" "}
					프로젝트에 미리 참여하세요.
				</div>
				<div className="w-full max-w-[312px] md:mt-10 md:ml-auto">
					<Button className="btn-primary">사전 예약하기</Button>
				</div>
			</div>
			<WakecupApplication />
		</>
	);
}
