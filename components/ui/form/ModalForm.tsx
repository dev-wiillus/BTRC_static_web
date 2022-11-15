import { ReactHTMLElement } from "react";

type ModalFormProps = {
	onSubmit: ReactHTMLElement<HTMLElement>["props"]["onSubmit"];
};

export default function ModalForm({ onSubmit }: ModalFormProps) {
	return (
		<form
			className="flex flex-col gap-y-8 pt-[48px] md:gap-y-10"
			onSubmit={onSubmit}
		>
			<div className="flex flex-col gap-y-2">placeholder inputs</div>
			label inputs
		</form>
	);
}
