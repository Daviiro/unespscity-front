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
	const [adminHistoricData, setAdminHistoricData] = useState([]);

	useEffect(() => {
		async function getNotifications() {
			try {
				const { data } = await api.get("/get-all-historic", {});
				setAdminHistoricData(data);
				console.log(data);
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
							return (
								<AdminHistoricCard
									key={notif._id}
									data={notif}
								/>
							);
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
