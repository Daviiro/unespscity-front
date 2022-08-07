import Header from "../../components/header";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	MidContentContainer,
} from "../../components/styled-components/PageStyles";
import Footer from "../../components/footer";
import { Typography } from "@mui/material";
import NotificationList from "../../components/notificationList";
import { StyledHr } from "../../components/styled-components/StyledHr";

const Notifications = () => {
	const notificationData = [
		{
			id: 1,
			title: "Notificação 1",
			description:
				"Esta notificação avisa que tu fez algo ou que algo ou que algo aconteceu",
			status: -1,
			date: new Date(),
		},
		{
			id: 2,
			title: "Notificação 1",
			description:
				"Esta notificação avisa que tu fez algo ou que algo aconteceu",
			status: 1,
			date: new Date(),
		},
		{
			id: 3,
			title: "Notificação 1",
			description:
				"Esta notificação avisa que tu fez algo ou que algo aconteceu",
			status: 2,
			date: new Date(),
		},
	];
	return (
		<ContainerBase>
			<Header />
			<ContentContainer>
				<TopContentContainer
					style={{
						justifyContent: "center",
						alignItems: "center",
						minHeight: "100px",
					}}
				>
					<Typography variant="h4">Nofiticações</Typography>
					<StyledHr />
				</TopContentContainer>

				<MidContentContainer>
					<NotificationList data={notificationData} />
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default Notifications;
