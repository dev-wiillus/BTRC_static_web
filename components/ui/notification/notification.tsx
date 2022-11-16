import { useContext } from "react";
import NotificationContext from "../../../store/notification-context";

type NotificationProps = {
	title: string;
	message: string;
	status: string;
};

function Notification(props: NotificationProps) {
	const notificationCtx = useContext(NotificationContext);

	const { title, message, status } = props;

	let statusClassName = "";

	if (status === "success") {
		statusClassName = "alert-success";
	}

	if (status === "error") {
		statusClassName = "alert-error";
	}

	if (status === "pending") {
		statusClassName = "alert-info";
	}
	const notificationClassName =
		"cursor-pointer alert text-white fixed top-4 left-1/2 -translate-x-1/2 z-[1000] w-[96%]";
	const activeClassName = `${notificationClassName} ${statusClassName}`;

	return (
		<div className={activeClassName} onClick={notificationCtx.hideNotification}>
			<h2 className="m-0 text-xl">{title}</h2>
			<p>{message}</p>
		</div>
	);
}

export default Notification;
