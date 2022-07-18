import React from "react";
import Typography from "@mui/material/Typography";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../../components/styled-components/PageStyles";
import Header from "../../../../components/header";
import MiniCard from "../../../../components/mini-card";
import { StyledHr } from "../../../../components/styled-components/StyledHr";
import AdminListCard from "../../../../components/card-list-admin";
import Footer from "../../../../components/footer";

const AdminAccidentRecords = () => {
	return (
		<ContainerBase>
			<Header />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_seguranca_defesa_civil.png"
						titulo="Segurança e Defesa Civil"
						linkItems={[
							{
								id: 1,
								name: "Registro de Roubos e Furtos",
								link: "/admin/registro_roubos",
							},
							{
								id: 2,
								name: "Violência Doméstica",
								link: "/admin/violencia-domestica",
							},
							{
								id: 3,
								name: "Registro de Acidentes",
								link: "/admin/registro-acidentes",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Lista de acidentes registrados
							</Typography>
						</div>
						<DescriptionText>
							Aqui você HUAHAUAHUAHAUHAUHAUAHAUHAUAHAU
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer></MidContentContainer>
			</ContentContainer>
		</ContainerBase>
	);
};

export default AdminAccidentRecords;