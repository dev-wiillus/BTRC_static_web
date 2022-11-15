type InputProps = React.DetailedHTMLProps<
	React.InputHTMLAttributes<HTMLInputElement>,
	HTMLInputElement
>;

export default function Input(props: InputProps) {
	return (
		<input
			type="text"
			className="input-bordered input w-full max-w-xs focus:border-secondary focus:text-secondary"
			{...props}
		/>
	);
}
