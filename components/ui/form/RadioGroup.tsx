interface RadioOptionProps {
	label?: string;
	value: string | number;
	checked?: boolean;
}

interface RadioGroupProps {
	title?: string;
	name: string;
	options: RadioOptionProps[];
}

function RadioGroup(props: RadioGroupProps) {
	const { title, name, options } = props;

	return (
		<div className="flex flex-col items-start gap-4">
			<label className="text-base font-bold text-text-primary">{title}</label>
			<div className="grid grid-cols-3 gap-x-10 gap-y-4">
				{options.map(({ label, ...rest }) => (
					<div key={rest.value}>
						<label className="flex cursor-pointer gap-x-2">
							<input
								type="radio"
								name={name}
								className="radio checked:bg-secondary"
								{...rest}
							/>
							<span className="text-base">{label}</span>
						</label>
					</div>
				))}
			</div>
		</div>
	);
}

export default RadioGroup;
