/* 오프라인 서비스 신청 */

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../Button";
import { ageOptions, sexOptions } from "../options";
import { AgeType, SexType } from "../types";
import Modal from "./Modal";

interface IForm {
	name: string;
	phone: string;
	sex: SexType;
	age: AgeType;
}

export default function ServiceApplication() {
	const {
		register,
		getValues,
		getFieldState,
		handleSubmit,
		formState: { errors },
		watch,
	} = useForm<IForm>();

	const onSubmit = (data: IForm) => {
		console.log(data);
	};

	const [verified, setVerified] = useState(false);
	const watchPhone = watch("phone");

	const verify = () => {
		if (watchPhone) {
			setVerified(true);
		}
	};

	return (
		<Modal title="#BTRC 참여하기" hidden={false}>
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
						<div className="flex gap-2">
							<input
								type="text"
								className="input-bordered input w-full max-w-xs focus:border-secondary focus:text-secondary"
								placeholder="전화번호"
								{...register("phone", { required: true })}
							/>
							<button className="btn-secondary btn text-white" type="button">
								인증
							</button>
						</div>
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
							성별
						</label>
						<div className="grid grid-cols-3 gap-x-10 gap-y-4">
							{sexOptions?.map(({ label, ...rest }) => (
								<div key={rest.value}>
									<label className="flex cursor-pointer gap-x-2">
										<input
											type="radio"
											className="radio checked:bg-secondary"
											{...rest}
											{...register("sex", { required: true })}
										/>
										<span className="text-base">{label}</span>
									</label>
								</div>
							))}
						</div>
					</div>
					{errors.sex?.type === "required" && (
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
				<Button className="btn-secondary mt-auto">신청하기</Button>
			</form>
		</Modal>
	);
}
