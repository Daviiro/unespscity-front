import React, { useEffect, useState } from "react";
import { api } from "../../../../services/api";
import Typography from "@mui/material/Typography";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../../components/styled-components/PageStyles";
import AdminHeader from "../../../../components/header/admin";
import MiniCard from "../../../../components/mini-card";
import AdminListCard from "../../../../components/card-list-admin";
import AdminListCardAlt from "../../../../components/card-list-admin/alternative";
import Footer from "../../../../components/footer";

const AdminPragas = () => {
	const [problems, setProblems] = useState([]);
	const [refresh, setRefresh] = useState(0);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/insetos_roedores_caramujos');
				setProblems(data);
			}
			catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, [refresh]);

	return (
		<ContainerBase>
			<AdminHeader />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_controle_pragas.png"
						titulo="Controle de Pragas"
						linkItems={[
							{
								id: 1,
								name: "Foco de Escorpião",
								link: "/admin/foco_de_escorpiao",
							},
							{
								id: 2,
								name: "Insetos Roedores e Caramujos",
								link: "/admin/insetos_roedores_caramujos",
							},
							{
								id: 3,
								name: "Leishmaniose",
								link: "/admin/leishmaniose",
							},
							{
								id: 4,
								name: "Radar da Dengue",
								link: "/admin/radar_da_dengue",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Insetos, Roedores e Caramujos
							</Typography>
						</div>
						<DescriptionText>
							Lista com todos os focos de insetos, roedores e
							caramujos evidenciados pelos usuarios.
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
					{
						problems.map((problem) => (
							<AdminListCard
								key={problem._id}
								source={problem.images}
								nome={problem.street}
								sobrenome={problem.referencePoint}
								descricao={problem.description}
								report={true}
								userId={problem.idUser}
								url="insetos_roedores_caramujos"
								id={problem._id}
								setRefresh={setRefresh}
							/>
						))
					}
{/* 					<AdminListCardAlt
						source="/assets/backup/25.jpg"
						titulo="Praga 1"
						nome="Rua Padre João Goetz, 83, Vila Euclides"
						sobrenome="Perto do Colégio Multiplus."
						descricao="Foco de cupim encontrado aqui."
					/>
					<AdminListCardAlt
						source="/assets/backup/26.jpg"
						titulo="Praga 2"
						nome="Rua Quinze de Novembro, 840, Vila Dubus"
						sobrenome="Perto do Feirão Oda."
						descricao="Está ocorrendo uma infestação de formigas na área."
					/>
					<AdminListCardAlt
						source="/assets/backup/27.jpg"
						titulo="Praga 3"
						nome="Rua Reverendo Coriolano, 8500, Jardim Aviação"
						sobrenome="Perto do Prudesan Engenharia."
						descricao="Rato avistado."
					/>
					<AdminListCardAlt
						source="/assets/backup/28.jpg"
						titulo="Praga 4"
						nome="Rua São Sebastião, 860, Vila Machadinho"
						sobrenome="Perto do Sabor e Cia."
						descricao="Andam aparecendo caramujos na minha casa."
					/>
					<AdminListCardAlt
						source="/assets/backup/29.jpg"
						titulo="Praga 5"
						nome="Rua Tenente Nicolau Maffei, 8070, Centro"
						sobrenome="Perto do Magazine Luiza."
						descricao="Uma ratazana saiu de um bueiro e entrou nos lugares."
					/> */}
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AdminPragas;
