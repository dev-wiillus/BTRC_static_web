import ModalTriggerButton from "../modal/ModalTriggerButton";

export default function Reservation() {
	return (
		<div className="grid h-[472px] grid-cols-1 gap-y-10 bg-bg-primary px-6 pt-40 pb-20 text-[24px] font-bold leading-[30px] md:h-[360px] md:grid-cols-2 md:items-center md:px-10 md:pb-40 md:pt-20 md:text-[40px] md:leading-[48px]">
			<div className="break-keep">
				당신과 곧 만날
				<br />
				<span className="font-chaney font-normal md:text-[38px]">
					#WAKECUP
				</span>{" "}
				프로젝트에 미리 참여하세요.
			</div>
			<div className="w-full max-w-[312px] md:mt-10 md:ml-auto">
				<ModalTriggerButton className="text-[16px]">
					사전 예약하기
				</ModalTriggerButton>
			</div>
		</div>
	);
}
