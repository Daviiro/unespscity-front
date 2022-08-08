import React, { useState } from "react";

import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	MidContentContainer,
	DescriptionText,
} from "../../../../components/styled-components/PageStyles";

import Header from "../../../../components/header";
import MiniCard from "../../../../components/mini-card";
import Typography from "@mui/material/Typography";
import Footer from "../../../../components/footer";
import AdminListCard from "../../../../components/card-list-admin";

const AdminAdocaoAreas = () => {
	const [nome, setName] = useState([]);
	const [sobrenome, setSurname] = useState([]);
	const [descricao, setDescription] = useState([]);

	return (
		<>
			<ContainerBase>
				<Header />
				<ContentContainer>
					<TopContentContainer>
						<MiniCard
							source="/assets/img/home_meio_ambiente.png"
							titulo="Meio Ambiente"
							linkItems={[
								{
									id: 1,
									name: "Adoção de Áreas Públicas",
									link: "/admin/adocao_areas_publicas",
								},
								{
									id: 2,
									name: "Monitoramento do Tempo",
									link: "/admin/monitoramento",
								},
								{
									id: 3,
									name: "Coleta de Lixo",
									link: "/admin/coleta-de-lixo",
								},
							]}
						/>
						<div style={{ marginTop: "14px" }}>
							<div style={{ textAlign: "center" }}>
								<Typography variant="h4">
									Adoção de Áreas Públicas
								</Typography>
							</div>
							<DescriptionText>
								Lista com todas as Áreas Públicas passíveis de adoção do município.
							</DescriptionText>
						</div>
						<div></div>
					</TopContentContainer>
					<MidContentContainer>
						<AdminListCard
							source="/assets/img/meio_ambiente.png"
							nome="[Nome]"
							sobrenome="[localização]"
							descricao="status: Disponível"
						/>
						<AdminListCard
							source="/assets/img/meio_ambiente.png"
							nome="[Nome]"
							sobrenome="[localização]"
							descricao="status: Disponível"
						/>
						<AdminListCard
							source="/assets/img/meio_ambiente.png"
							nome="[Nome]"
							sobrenome="[localização]"
							descricao="status: Disponível"
						/>
						<AdminListCard
							source="/assets/img/meio_ambiente.png"
							nome="[Nome]"
							sobrenome="[localização]"
							descricao="status: Disponível"
						/>
						<AdminListCard
							source="/assets/img/meio_ambiente.png"
							nome="[Nome]"
							sobrenome="[localização]"
							descricao="status: Adotado"
						/>
						<AdminListCard
							source="/assets/img/meio_ambiente.png"
							nome="[Nome]"
							sobrenome="[localização]"
							descricao="status: Adotado"
						/>
					</MidContentContainer>
				</ContentContainer>
				<Footer />
			</ContainerBase>
		</>
	);
};
export default AdminAdocaoAreas;
