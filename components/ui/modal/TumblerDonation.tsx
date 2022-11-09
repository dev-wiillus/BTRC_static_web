import Button from "../Button";
import RadioGroup from "../form/RadioGroup";

// TODO: 폼 라이브러리 붙이기
function TumblerDonation() {
	return (
		<>
			<input type="checkbox" id="my-modal-3" className="modal-toggle" />
			<div className="modal">
				<form>
					<div className="modal-box relative flex flex-col gap-y-10">
						<label
							htmlFor="my-modal-3"
							className="btn-ghost btn-lg btn absolute right-2 top-2 text-primary"
						>
							✕
						</label>
						<h3 className="text-2xl font-bold text-primary">
							텀블러 기부 신청하기
						</h3>
						<div className="flex flex-col gap-2">
							<input
								type="text"
								placeholder="이름"
								className="input-bordered input w-full max-w-xs"
							/>
							<input
								type="text"
								placeholder="이메일"
								className="input-bordered input w-full max-w-xs"
							/>
							<div className="flex gap-2">
								<input
									type="text"
									placeholder="전화번호"
									className="input-bordered input w-full max-w-xs"
								/>
								<button className="btn">인증</button>
							</div>
						</div>
						<div className="form-control w-full">
							<RadioGroup
								title="성별"
								name="sex"
								options={[
									{ label: "여성", value: "female" },
									{ label: "남성", value: "male" },
									{ label: "선택 안함", value: "unselected" },
								]}
							/>
						</div>
						<div className="form-control w-full">
							<RadioGroup
								title="연령대"
								name="age"
								options={[
									{ label: "20대", value: "20" },
									{ label: "30대", value: "30" },
									{ label: "40대", value: "40" },
									{ label: "50대 이상", value: "50+" },
								]}
							/>
						</div>
						<div className="form-control w-full">
							<label className="text-base font-bold text-text-primary">
								기부 예정 텀블러 수
							</label>
							<input
								type="number"
								className="input-bordered input w-full max-w-xs focus:border-secondary focus:text-secondary"
								defaultValue={1}
							/>
						</div>
						<Button>신청하기</Button>
					</div>
				</form>
			</div>
		</>
	);
}

export default TumblerDonation;
