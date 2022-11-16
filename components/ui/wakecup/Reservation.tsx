import ModalTriggerButton from "../modal/ModalTriggerButton";

export default function Reservation() {
	return (
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
				<ModalTriggerButton>사전 예약하기</ModalTriggerButton>
			</div>
		</div>
	);
}
