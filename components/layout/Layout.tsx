import { useContext } from "react";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/Notification";
import Footer from "./Footer";
import Header from "./Header";

function Layout({ children }: any) {
	const notificationCtx = useContext(NotificationContext);

	const activeNotification = notificationCtx.notification;

	return (
		<div className="md:mx-xl flex h-full min-h-screen min-w-[360px] flex-col md:container">
			<Header />
			<main>{children}</main>
			<Footer />
			{activeNotification && <Notification {...activeNotification} />}
		</div>
	);
}

export default Layout;
