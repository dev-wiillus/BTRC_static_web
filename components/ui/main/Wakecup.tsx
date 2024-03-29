import Link from "next/link";
import Button from "../Button";
import ModalTriggerButton from "../modal/ModalTriggerButton";
import WakecupApplication from "../modal/WakecupApplication";

export default function Wakecup() {
	return (
		<>
			<div className="h-[568px] bg-bg-primary pt-[80px] md:h-[404px] md:pt-0">
				<p className="px-6 font-chaney text-base font-normal text-primary md:bg-button-secondary md:px-[40px] md:text-lg md:leading-[40px] md:text-white">
					COMING SOON
				</p>
				<div className="grid grid-cols-1 px-6 md:grid-cols-2 md:px-[40px] md:pt-[80px]">
					<div className="text-[24px] font-bold">
						<div className="mt-2 md:text-[40px]">
							<h1 className="md:text-[18px] md:text-primary">
								텀블러 공유하고 수익까지!
							</h1>
							<h1 className="md:mt-2 md:leading-[48px]">
								<span className="font-chaney font-normal md:text-[38px]">
									#BTRC
								</span>
								의 신규 프로젝트에 함께 해보세요.
							</h1>
						</div>
					</div>
					<div className="mt-10 mb-20 flex flex-col gap-y-2 md:m-0 md:items-end md:justify-end xl:flex-row xl:gap-x-4">
						<ModalTriggerButton className="btn-primary md:w-[272px]">
							사전 예약하기
						</ModalTriggerButton>
						<Link href="wakecup">
							<Button className="md:w-[272px]">자세히 알아보기</Button>
						</Link>
					</div>
				</div>
			</div>
			<WakecupApplication />
		</>
	);
}
