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
import NotificationCard from "./card";

const Notifications = () => {
	const { user } = useContext(Context);
	const [notificationData, setNotificationData] = useState([]);

	useEffect(() => {
		async function getNotifications() {
			try {
				const { data } = await api.get("/notify-by-user", {
					params: {
						userId: -1, //user.userId,
					},
				});
				if (data !== false) {
					setNotificationData(data);
					console.log(data);
				}
				//atualizar todas como "lidas"
				try {
					const res = await api.put("/update-is-read", {
						params: {
							userId: -1, //user.userId,
						},
					});
					console.log("res" + res.status);
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
					<Typography variant="h4">Notificações</Typography>
					<StyledHr />
				</TopContentContainer>

				<MidContentContainer>
					{notificationData.length !== 0 ? (
						notificationData.map((notif) => {
							if (notif.userId === -1) {
								//user.userId) {
								return (
									<NotificationCard
										key={notif._id}
										data={notif}
									/>
								);
							} else {
								return (
									<h4>
										Você ainda não possui nenhuma
										notificação
									</h4>
								);
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
