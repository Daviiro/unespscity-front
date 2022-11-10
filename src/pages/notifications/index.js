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
import { Card } from "../../components/notificationList/styles";
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
						userId: user.userId,
					},
				});
				setNotificationData(data);
				//atualizar todas como "lidas"
				try {
					api.put("/notify", {
						userId: user.userId,
					}).then((res) => {
						console.log(res);
					});
				} catch (e) {
					console.log(e);
				}
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
					{notificationData.length !== 0 ? (
						notificationData.map((notif) => {
							if (notif.userId === user.userId) {
								<Card key={notif._id}>
									<span>{notif.name}</span>
									<div
										style={{
											display: "flex",
											flexDirection: "column",
										}}
									>
										<span className="description-style">
											{notif.description}
										</span>
										<br />

										{notif.status === 1 && (
											<span>Status: Não lido</span>
										)}
										{notif.status === 2 && (
											<span>Status: Lido</span>
										)}
									</div>
									<div>
										<span>{notif.date.getUTCDate()}</span>/
										<span>
											{notif.date.getUTCMonth() + 1}
										</span>
										/
										<span>
											{notif.date.getUTCFullYear()}
										</span>
									</div>
								</Card>;
							}
						})
					) : (
						<h4>Você ainda não possui nenhuma notificação</h4>
					)}
					{/**
					 * <NotificationList data={notificationData} />
					 */}
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default Notifications;
