import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import NotificationContext from "../../../store/notification-context";
import Button from "../Button";
import { ageOptions, genderOptions } from "../options";
import { AgeType, ApiResponseType, GenderType } from "../types";
import VerifyPhone from "../VerifyPhone";
import Modal from "./Modal";

const TITLE = "텀블러 공유 신청하기";

export interface IForm {
	name: string;
	email: string;
	phone: string;
	gender: GenderType;
	age: AgeType;
	expectedCount: number;
}

export default function WakecupApplication() {
	const notificationCtx = useContext(NotificationContext);
	const {
		register,
		getValues,
		handleSubmit,
		formState: { isValid, errors },
		watch,
		trigger,
		reset,
	} = useForm<IForm>();

	const [visible, setVisible] = useState<boolean | null>(null);

	const onSubmit = (data: IForm) => {
		notificationCtx.showNotification({
			title: "로딩중...",
			message: "",
			status: "pending",
		});

		fetch("/api/wakecup", {
			method: "POST",
			body: JSON.stringify(data),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((res) => {
				if (res.ok) {
					return res.json();
				}

				return res.json().then((data: ApiResponseType) => {
					throw new Error(`${TITLE}가 실패하였습니다.`);
				});
			})
			.then((data: ApiResponseType) => {
				notificationCtx.showNotification({
					title: "성공!",
					message: `${TITLE}가 완료되었습니다.`,
					status: "success",
				});
				setVisible(false);
				reset();
			})
			.catch((error) => {
				notificationCtx.showNotification({
					title: "실패!",
					message: error.message,
					status: "error",
				});
			});
	};

	return (
		<Modal title={TITLE} {...(visible !== null && { hidden: !visible })}>
			<form
				className="flex flex-col gap-y-8 pt-[48px] md:gap-y-10"
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className="flex flex-col gap-y-2">
					<div>
						<input
							type="text"
							className="input-bordered input w-full max-w-xs focus:border-secondary focus:text-secondary"
							placeholder="이름"
							{...register("name", { required: true })}
						/>
						{errors.name?.type === "required" && (
							<p role="alert" className="text-error">
								이름을 입력하세요.
							</p>
						)}
					</div>
					<div>
						<input
							type="email"
							className="input-bordered input w-full max-w-xs focus:border-secondary focus:text-secondary"
							placeholder="이메일"
							{...register("email", { required: true })}
						/>
						{errors.email?.type === "required" && (
							<p role="alert" className="text-error">
								이메일을 입력하세요.
							</p>
						)}
					</div>
					<VerifyPhone
						register={register}
						getValues={getValues}
						trigger={trigger}
						watch={watch}
						errors={errors}
					/>
				</div>
				<div className="form-control w-full text-[18px]">
					<div className="flex flex-col items-start gap-4">
						<label className="text-base font-bold text-text-primary">
							성별
						</label>
						<div className="grid grid-cols-3 gap-x-10 gap-y-4">
							{genderOptions?.map(({ label, ...rest }) => (
								<div key={rest.value}>
									<label className="flex cursor-pointer gap-x-2">
										<input
											type="radio"
											className="radio checked:bg-secondary"
											{...rest}
											{...register("gender", { required: true })}
										/>
										<span className="text-base">{label}</span>
									</label>
								</div>
							))}
						</div>
					</div>
					{errors.gender?.type === "required" && (
						<p role="alert" className="text-error">
							성별을 선택하세요.
						</p>
					)}
				</div>
				<div className="form-control w-full text-[18px]">
					<div className="flex flex-col items-start gap-4">
						<label className="text-base font-bold text-text-primary">
							연령대
						</label>
						<div className="grid grid-cols-3 gap-x-10 gap-y-4">
							{ageOptions?.map(({ label, ...rest }) => (
								<div key={rest.value}>
									<label className="flex cursor-pointer gap-x-2">
										<input
											type="radio"
											className="radio checked:bg-secondary"
											{...rest}
											{...register("age", { required: true })}
										/>
										<span className="text-base">{label}</span>
									</label>
								</div>
							))}
						</div>
					</div>
					{errors.age?.type === "required" && (
						<p role="alert" className="text-error">
							연령대를 선택하세요.
						</p>
					)}
				</div>
				<div className="form-control w-full text-[18px]">
					<div className="flex flex-col items-start gap-4">
						<label className="text-base font-bold text-text-primary">
							공유 예정 텀블러 수
						</label>
						<label className="input-group">
							<input
								type="number"
								className="input-bordered input w-full max-w-xs text-right focus:border-secondary focus:text-secondary"
								defaultValue={1}
								{...register("expectedCount", { required: true })}
							/>
							<span className="border bg-white">개</span>
						</label>
					</div>
					{errors.expectedCount?.type === "required" && (
						<p role="alert" className="text-error">
							텀블러 개수를 입력하세요.
						</p>
					)}
				</div>
				<Button className="btn-secondary mt-auto" disabled={!isValid}>
					신청하기
				</Button>
			</form>
		</Modal>
	);
}
