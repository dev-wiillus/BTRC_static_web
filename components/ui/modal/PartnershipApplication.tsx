import { useForm } from "react-hook-form";
import Button from "../Button";
import { adTypeOptions } from "../options";
import { AdPlanType, ApiResponseType } from "../types";
import Modal from "./Modal";

export interface IForm {
	company: string;
	name: string;
	email: string;
	phone: string;
	adType: AdPlanType;
	description?: string;
}

export default function PartnershipApplication() {
	const {
		register,
		getValues,
		getFieldState,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<IForm>();

	const onSubmit = async (data: IForm) => {
		console.log(data);

		const response = await fetch("/api/partnership", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const { ok } = (await response.json()) as ApiResponseType;

		// TODO: 성공, 실패 모달 띄우기
	};
	return (
		<Modal title="파트너십 문의하기">
			<form
				className="flex flex-col gap-y-8 pt-[48px] md:gap-y-10"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="flex flex-col gap-y-2">
					<div>
						<input
							type="text"
							placeholder="회사명"
							className="input-bordered input w-full max-w-xs focus:border-secondary focus:text-secondary"
							{...register("company", { required: true })}
						/>
						{errors.company?.type === "required" && (
							<p role="alert" className="text-error">
								회사명을 입력하세요.
							</p>
						)}
					</div>
					<div>
						<input
							type="text"
							placeholder="담당자명"
							className="input-bordered input w-full max-w-xs focus:border-secondary focus:text-secondary"
							{...register("name", { required: true })}
						/>
						{errors.name?.type === "required" && (
							<p role="alert" className="text-error">
								담당자명을 입력하세요.
							</p>
						)}
					</div>
					<div>
						<input
							type="email"
							placeholder="이메일"
							className="input-bordered input w-full max-w-xs focus:border-secondary focus:text-secondary"
							{...register("email", { required: true })}
						/>
						{errors.email?.type === "required" && (
							<p role="alert" className="text-error">
								이메일을 입력하세요.
							</p>
						)}
					</div>
					<div>
						<input
							type="text"
							placeholder="전화번호"
							className="input-bordered input w-full max-w-xs focus:border-secondary focus:text-secondary"
							{...register("phone", { required: true })}
						/>
						{errors.phone?.type === "required" && (
							<p role="alert" className="text-error">
								전화번호를 입력하세요.
							</p>
						)}
					</div>
				</div>
				<div className="form-control w-full text-[18px]">
					<div className="flex flex-col items-start gap-4">
						<label className="text-base font-bold text-text-primary">
							광고 유형
						</label>
						<div className="grid grid-cols-2 gap-x-10 gap-y-4">
							{adTypeOptions?.map(({ label, ...rest }) => (
								<div key={rest.value}>
									<label className="flex cursor-pointer gap-x-2">
										<input
											type="radio"
											className="radio checked:bg-secondary"
											{...rest}
											{...register("adType", { required: true })}
										/>
										<span className="text-base">{label}</span>
									</label>
								</div>
							))}
						</div>
					</div>
					{errors.adType?.type === "required" && (
						<p role="alert" className="text-error">
							광고 유형을 선택하세요.
						</p>
					)}
				</div>
				<div className="form-control w-full">
					<div className="flex flex-col items-start gap-4">
						<label className="text-base font-bold text-text-primary">
							문의 내용
						</label>
						<textarea
							className="textarea-bordered textarea h-[200px] w-full max-w-xs focus:border-secondary focus:text-secondary"
							placeholder="문의 내용을 입력해주세요. (선택)"
							{...register("description")}
						/>
					</div>
				</div>
				<Button className="btn-secondary mt-auto">신청하기</Button>
			</form>
		</Modal>
	);
}
