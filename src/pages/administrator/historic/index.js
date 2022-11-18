import React, { useContext, useEffect, useState } from "react";
import AdminHeader from "../../../components/header/admin";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	MidContentContainer,
} from "../../../components/styled-components/PageStyles";
import Footer from "../../../components/footer";
import { Typography } from "@mui/material";
import HistoricList from "../../../components/historicList";
import { Card } from "../../../components/historicList/styles";
import { StyledHr } from "../../../components/styled-components/StyledHr";
import { api } from "../../../services/api";
import { Context } from "../../../context/Auth/AuthContext";
import AdminHistoricCard from "./card";

const AdminHistoric = () => {
	const { user } = useContext(Context);
	const [adminHistoricData, setAdminHistoricData] = useState([
		{
			_id: 1,
			serviceId: 1,
			userId: 1,
			serviceName: "Iluminacao",
			description:
				"Há uma sequência de três postes queimados nesta rua.",
			street: "Rua Faria Lima",
			streetNumber: 5757,
			date: new Date(),
		},
	]);
	{
		/**
const adminHistoricData2 = [
		{
			id: 1,
			title: "Notificação 1",
			description:
				"Esta notificação avisa que tu fez algo ou que algo ou que algo aconteceu",
			date: new Date(),
		},
		{
			id: 2,
			title: "Notificação 1",
			description:
				"Esta notificação avisa que tu fez algo ou que algo aconteceu",
			date: new Date(),
		},
		{
			id: 3,
			title: "Notificação 1",
			description:
				"Esta notificação avisa que tu fez algo ou que algo aconteceu",
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
				setAdminHistoricData(data);
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
			<AdminHeader />
			<ContentContainer>
				<TopContentContainer
					style={{
						justifyContent: "center",
						alignItems: "center",
						minHeight: "100px",
					}}
				>
					<Typography variant="h4"> Histórico da Cidade </Typography>
					<StyledHr />
				</TopContentContainer>

				<MidContentContainer>
					{adminHistoricData.length !== 0 ? (
						adminHistoricData.map((notif) => {
							if (notif.userId === user.userId) {
								return (
									<AdminHistoricCard
										key={notif._id}
										data={notif}
									/>
								);
							} else {
								return (
									<h4> O histórico ainda está vazio.  </h4>
								);
							}
						})
					) : (
						<h4> O histórico ainda está vazio. </h4>
					)}
					{/**
					 * <HistoricList data = {adminHistoricData} />
					 */}
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default AdminHistoric;