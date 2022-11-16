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
		"cursor-pointer alert text-white fixed bottom-0 left-0 z-[1000]";
	const activeClassName = `${notificationClassName} ${statusClassName}`;

	return (
		<div className={activeClassName} onClick={notificationCtx.hideNotification}>
			<h2 className="m-0 text-xl">{title}</h2>
			<p>{message}</p>
		</div>
	);
}

export default Notification;
