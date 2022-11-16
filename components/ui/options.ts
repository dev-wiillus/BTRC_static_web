import { RadioOptionProps } from "./types";

export const genderOptions: RadioOptionProps[] = [
	{ label: "여성", value: "female" },
	{ label: "남성", value: "male" },
	{ label: "선택 안 함", value: "unselected" },
];

export const ageOptions: RadioOptionProps[] = [
	{ label: "20대", value: "20" },
	{ label: "30대", value: "30" },
	{ label: "40대", value: "40" },
	{ label: "50대 이상", value: "50+" },
];

export const adTypeOptions: RadioOptionProps[] = [
	{ label: "베이직 플랜", value: "basic" },
	{ label: "프리미엄 플랜", value: "premium" },
];
