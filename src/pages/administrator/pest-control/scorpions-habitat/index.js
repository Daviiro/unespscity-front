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

const AdminEscorpiao = () => {
	const [problems, setProblems] = useState([]);
	const [refresh, setRefresh] = useState(0);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/foco_escorpiao');
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
								Foco de Escorpião
							</Typography>
						</div>
						<DescriptionText>
							Lista com todos os focos de escorpiões que são
							relatados pelos usuarios.
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
								url="foco_escorpiao"
								id={problem._id}
								setRefresh={setRefresh}
							/>
						))
					}
					{/* <AdminListCardAlt
							source="/assets/backup/20.jpg"
							titulo="Escorpião 1" 
							nome="Rua Kotaro Takahashi, 78, Conjunto Habitacional Ana Jacinta"
							sobrenome="Perto da E.e Antônio Moreira Lima."
							descricao="Apareceu um escorpião na minha casa."
						/>
						<AdminListCardAlt
							source="/assets/backup/21.jpg"
							titulo="Escorpião 2" 
							nome="Rua Luiz Olivetti, 790, Jardim Prudentino"
							sobrenome="Perto do Espaço Leciana Oliveira."
							descricao="Um escorpião invadiu a minha residência."
						/>
						<AdminListCardAlt
							source="/assets/backup/22.jpg"
							titulo="Escorpião 3" 
							nome="Rua Maria Ângela de Oliveira Esterque, 8000, Jardim Santa Fé"
							sobrenome="Perto da rodovia Júlio Budiski."
							descricao="Encontramos um foco de escorpião aqui."
						/>
						<AdminListCardAlt
							source="/assets/backup/23.jpg"
							titulo="Escorpião 4" 
							nome="Rua Nestor Guermandi, 810, Parque Shiraiwa"
							sobrenome="Perto da RavelliDoces."
							descricao="Apareceu um escorpião aqui."
						/>
						<AdminListCardAlt
							source="/assets/backup/24.jpg"
							titulo="Escorpião 5" 
							nome="Rua Otorino Pereti, 8020, Jardim Itaipu"
							sobrenome="Perto do Bar do Valcir."
							descricao="Vimos um escorpião passando por aqui."
						/> */}
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AdminEscorpiao;
