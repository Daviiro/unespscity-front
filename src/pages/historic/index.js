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
	const [userHistoricData, setUserHistoricData] = useState([]);

	useEffect(() => {
		async function getNotifications() {
			try {
				const { data } = await api.get("/get-historic-by-user", {
					params: {
						userId: -1, //user.userId,
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
						Histórico de Evidências (Solicitações) {" "}
					</Typography>
					<StyledHr />
				</TopContentContainer>

				<MidContentContainer>
					{userHistoricData.length !== 0 ? (
						userHistoricData.map((item) => {
							if (item.userId == -1) {
								//user.userId) {
								return (
									<UserHistoricCard
										key={item._id}
										data={item}
									/>
								);
							} else {
								return (
									<h4> O seu histórico ainda está vazio. </h4>
								);
							}
						})
					) : (
						<h4>
							O seu histórico ainda está vazio ou você não está
							logado.
						</h4>
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
