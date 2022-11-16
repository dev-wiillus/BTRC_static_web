import ModalTriggerButton from "../modal/ModalTriggerButton";

export default function Hero() {
	return (
		<div className="flex h-screen flex-col bg-[url('../public/images/wakecup/bg_mobile.png')] md:h-[720px] md:bg-[url('../public/images/wakecup/bg_web.png')]">
			<div className="mt-auto mb-20 ml-6 md:mb-10 md:mr-10 md:ml-auto md:text-right">
				<div>
					<h1 className="font-hero-hangle text-[40px] leading-[48px] text-text-light-primary md:text-[80px] md:leading-[96px]">
						잠든 가치를 <br />
						깨우는 움직임
					</h1>
					<h1 className="font-chaney text-[32px] leading-[40px] text-primary md:text-[80px] md:leading-[100px]">
						#WAKECUP
					</h1>
				</div>
				<ModalTriggerButton className="mt-10 max-w-[160px] md:hidden">
					사전 예약하기
				</ModalTriggerButton>
			</div>
		</div>
	);
}
