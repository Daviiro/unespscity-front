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
import HistoricList from "../../components/historicList";
import { Card } from "../../components/historicList/styles";
import { StyledHr } from "../../components/styled-components/StyledHr";
import { api } from "../../services/api";
import { Context } from "../../context/Auth/AuthContext";
import UserHistoricCard from "./card";

const UserHistoric = () => {
	const { user } = useContext(Context);
	const [userHistoricData, setUserHistoricData] = useState([
		{
			_id: 1,
			serviceId: 1,
			userId: 1,
			serviceName: "Iluminacao",
			description: "Há uma sequência de três postes queimados nesta rua.",
			street: "Rua Faria Lima",
			streetNumber: 5757,
			date: new Date(),
		},
	]);
	{
		/**
const userHistoricData2 = [
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
				const { data } = await api.get("/get-historic-by-user", {
					params: {
						userId: user.userId,
					},
				});
				setUserHistoricData(data);
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
					<Typography variant="h4">
						{" "}
						Histórico de Solicitações{" "}
					</Typography>
					<StyledHr />
				</TopContentContainer>

				<MidContentContainer>
					{userHistoricData.length !== 0 ? (
						userHistoricData.map((notif) => {
							if (notif.userId == user.userId) {
								return (
									<UserHistoricCard
										key={notif._id}
										data={notif}
									/>
								);
							} else {
								return (
									<h4> O seu histórico ainda está vazio. </h4>
								);
							}
						})
					) : (
						<h4> O seu histórico ainda está vazio. </h4>
					)}
					{/**
					 * <HistoricList data = {userHistoricData} />
					 */}
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default UserHistoric;
