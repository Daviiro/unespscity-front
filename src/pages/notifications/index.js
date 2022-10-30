import React, { useContext, useEffect, useState } from "react";
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
import { api } from "../../services/api";
import { Context } from "../../context/Auth/AuthContext";

const Notifications = () => {
	const { user } = useContext(Context);
	const [notificationData, setNotificationData] = useState([]);
	{
		/**
const notificationData2 = [
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
*/
	}

	useEffect(() => {
		async function getNotifications() {
			try {
				const { data } = await api.get("/notify-by-user", {
					data: {
						id: user.userId,
					},
				});
				setNotificationData(data);
			} catch (e) {
				console.log(e);
			}
		}
		getNotifications();
	}, []);

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
