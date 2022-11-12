function Button(props: any) {
	const { children, className, ...rest } = props;
	return (
		<button
			className={`btn h-[56px] w-full text-text-light-primary ${className}`}
			{...rest}
		>
			{children}
		</button>
	);
}

export default Button;
