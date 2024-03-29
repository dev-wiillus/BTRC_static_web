export interface RadioOptionProps {
	label?: string;
	value: string | number;
	checked?: boolean;
}

export type GenderType = "female" | "male" | "unselected";
export type AgeType = "20" | "30" | "40" | "50+";

export type AdPlanType = "basic" | "premium";

export type ApiResponseType = {
	ok: boolean;
	message: string;
};

export type AuthenticationType = {
	phone: string;
	code: string;
}