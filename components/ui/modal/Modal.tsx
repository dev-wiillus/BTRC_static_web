import { useEffect, useRef } from "react";

type ModalProps = {
	title: string;
	children: React.ReactNode;
	modalId?: string;
	hidden?: boolean;
};

export default function Modal({
	title,
	children,
	modalId = "modal",
	hidden = true,
}: ModalProps) {
	const ref = useRef<HTMLInputElement>(null);
	useEffect(() => {
		if (ref.current) {
			ref.current.checked = !hidden;
		}
	}, [hidden]);
	return (
		<>
			<input type="checkbox" id={modalId} className="modal-toggle" ref={ref} />
			<label className="modal">
				<label className="modal-box p-6 pt-10 md:w-[588px] md:px-[102px] md:py-[48px]">
					<div className="flex justify-between md:justify-center">
						<h3 className="text-[24px] font-bold text-secondary md:text-[32px]">
							{title}
						</h3>
					</div>
					<label
						htmlFor={modalId}
						className="btn-ghost btn-square btn absolute top-[36px] right-[12px] text-[24px] text-secondary md:top-[20px] md:right-[20px] md:text-[32px]"
					>
						✕
					</label>
					{children}
				</label>
			</label>
		</>
	);
}
