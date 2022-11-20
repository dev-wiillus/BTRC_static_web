import { CSSProperties, useState } from "react";
import { UseFormReturn, FieldErrors, FieldValues } from "react-hook-form";
import { useTimer } from "react-timer-hook";

type FormProps = any;

type VerifyPhoneProps = Pick<
	UseFormReturn<FormProps>,
	"register" | "getValues" | "trigger" | "watch"
> & {
	errors: FieldErrors<FieldValues>;
};

/* 
    인증번호 입력란 invalid 상태 -> 인증번호 전송 버튼 비활성화
    인증 x -> 참여하기 버튼 비활성화
    인증 버튼 클릭 -> 인증번호 전송, 인증번호 입력창 활성화, 카운트다운 시작, 재전송으로 버튼 변경
    인증 완료 -> 인증 완료 메시지, 참여하기 버튼 활성화
    인증 실패 -> 인증 실패 메시지
    전화번호 수정시 다시 인증 필요
*/

export default function VerifyPhone({
	register,
	trigger,
	watch,
	errors,
}: VerifyPhoneProps) {
	const [sendedMessage, setSendedMessage] = useState(false);
	const phone = watch("phone");

	const expiryTimestamp = new Date();
	expiryTimestamp.setSeconds(expiryTimestamp.getSeconds() + 60 * 3);
	const { seconds, minutes, restart, pause } = useTimer({ expiryTimestamp });

	const sendMessage = () => {
		fetch("/api/sendMessage", {
			method: "POST",
			body: JSON.stringify({ phone }),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => {
			console.log(res.ok);
			if (res.ok) {
				setSendedMessage(true);
				restart(expiryTimestamp);
			}
		});
	};

	const onChangeAuth = (event: any) => {
		const value = event.target.value;
		if (value && value.length === 6) {
			trigger("authenticationCode");
		}
	};

	const validateAuth = async (value?: string) => {
		if (value && value.length === 6) {
			const { ok } = await fetch(
				`/api/verifyAuthenticationCode?phone=${phone}&code=${value}`,
				{
					method: "GET",
					headers: {
						"Content-Type": "application/json",
					},
				},
			);
			if (ok) {
				pause();
				return true;
			}
		}
		return false;
	};

	const verified =
		!errors.authenticationCode && watch("authenticationCode")?.length === 6;
	return (
		<>
			<div className="form-control">
				<div className="mb-1 flex gap-2">
					<input
						type="text"
						className="input-bordered input w-full max-w-xs focus:border-secondary focus:text-secondary"
						placeholder="전화번호"
						minLength={10}
						maxLength={11}
						{...register("phone", {
							required: "전화번호를 입력하세요.",
							minLength: { value: 10, message: "전화번호를 입력하세요." },
							maxLength: 11,
							pattern: {
								value: /^01([0|1|6|7|8|9]?)-?([0-9]{3,4})-?([0-9]{4})$/,
								message: "전화번호가 올바르지 않습니다.",
							},
							onChange: () => trigger("phone"),
						})}
					/>
					<button
						className="btn-secondary btn text-white"
						type="button"
						onClick={sendMessage}
						disabled={!!errors.phone}
					>
						{sendedMessage ? "재인증" : "인증"}
					</button>
				</div>
				{errors.phone && (
					<p role="alert" className="text-error">
						{errors.phone.message as string}
					</p>
				)}
			</div>
			<div className="form-control relative gap-y-1">
				<input
					type="text"
					className="input-bordered input w-full max-w-xs focus:border-secondary focus:text-secondary"
					placeholder="인증번호 입력"
					maxLength={6}
					minLength={6}
					hidden={!sendedMessage || verified}
					{...register("authenticationCode", {
						required: "인증번호를 입력하세요.",
						minLength: 6,
						maxLength: 6,
						onChange: onChangeAuth,
						validate: validateAuth,
					})}
				/>
				{sendedMessage && !verified && (
					<p role="alert" className="absolute top-1/2 right-4 -translate-y-1/2">
						<span className="countdown font-mono text-text-gray-primary">
							<span style={{ "--value": minutes } as CSSProperties}></span>:
							<span style={{ "--value": seconds } as CSSProperties}></span>
						</span>
					</p>
				)}
				{errors.authenticationCode && sendedMessage && (
					<p role="alert" className="text-error">
						{errors.authenticationCode.message as string}
					</p>
				)}
				{verified && (
					<p role="alert" className="text-success">
						인증되었습니다.
					</p>
				)}
			</div>
		</>
	);
}
