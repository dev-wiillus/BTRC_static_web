import React, {
	ComponentProps,
	createContext,
	useEffect,
	useState,
} from "react";

type NotificationType = {
	title: string;
	message: string;
	status: string;
};

export type NotificationContextType = {
	notification: NotificationType | null;
	showNotification: (notificationData: NotificationType) => void;
	hideNotification: () => void;
};

const NotificationContext = createContext<NotificationContextType>({
	notification: null,
	showNotification: function (notificationData: NotificationType) {},
	hideNotification: function () {},
});

export function NotificationContextProvider(props: ComponentProps<any>) {
	const [activeNotification, setActiveNotification] =
		useState<NotificationType | null>(null);

	useEffect(() => {
		if (
			activeNotification &&
			(activeNotification.status === "success" ||
				activeNotification.status === "error")
		) {
			const timer = setTimeout(() => {
				setActiveNotification(null);
			}, 5000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [activeNotification]);

	function showNotificationHandler(notificationData: NotificationType) {
		setActiveNotification(notificationData);
	}

	function hideNotificationHandler() {
		setActiveNotification(null);
	}

	const context: NotificationContextType = {
		notification: activeNotification,
		showNotification: showNotificationHandler,
		hideNotification: hideNotificationHandler,
	};

	return (
		<NotificationContext.Provider value={context}>
			{props.children}
		</NotificationContext.Provider>
	);
}

export default NotificationContext;
