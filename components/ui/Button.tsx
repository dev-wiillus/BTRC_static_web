function Button(props: any) {
  const { children, className, ...rest } = props;
  return (
    <button className={className} {...rest}>
      {children}
    </button>
  );
}

export default Button;
