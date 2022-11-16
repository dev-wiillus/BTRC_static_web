type ModalTriggerButtonProps = {
	modalId?: string;
} & React.DetailedHTMLProps<
	React.LabelHTMLAttributes<HTMLLabelElement>,
	HTMLLabelElement
>;

export default function ModalTriggerButton({
	modalId = "modal",
	className,
	...props
}: ModalTriggerButtonProps) {
	return (
		<label
			htmlFor={modalId}
			className={`btn-primary btn h-[56px] w-full ${className}`}
			{...props}
		/>
	);
}
