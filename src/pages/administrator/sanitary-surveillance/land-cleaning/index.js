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


const AdminTerreno = () => {
/*	const [problems, setProblems] = useState([]);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/limpeza_terreno');
				setProblems(data);
			}
			catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, [problems]);	*/

	return (
		<ContainerBase>
			<AdminHeader />
				<ContentContainer>
					<TopContentContainer>
						<MiniCard
							source="/assets/img/home_vigilancia_sanitaria.png"
							titulo="Vigilância Sanitária"
							linkItems={[
								{
									id: 1,
									name: "Limpeza de Piscinas",
									link: "/admin/limpeza_de_piscinas",
								},
								{
									id: 2,
									name: "Limpeza de Terreno",
									link: "/admin/limpeza_de_terreno",
								},
								{
									id: 3,
									name: "Restaurantes/Ambientes Irregulares",
									link: "/admin/restaurantes",
								},
							]}
						/>
						<div style={{ marginTop: "14px" }}>
							<div style={{ textAlign: "center" }}>
								<Typography variant="h4">
									Limpeza de Terreno
								</Typography>
							</div>
							<DescriptionText>
								Lista com todas as ocorrências de terrenos Publicos
								e/ou privados com irregularidades.
							</DescriptionText>
						</div>
						<div></div>
					</TopContentContainer>
					<MidContentContainer>
					{/*	{
							problems.map((problem) => (
								<AdminListCard
									source={problem.images}
									nome={problem.street}
									sobrenome={problem.referencePoint}
									descricao={problem.description}
									report={true}
									userId={problem.userId}
								/>
							))
						}	*/}
						<AdminListCardAlt
							source="/assets/backup/35.jpg"
							titulo="Terreno 1" 
							nome="Rua José Albertoni, 98, Jardim Tropical"
							sobrenome="Perto da Sorveteria Nápoles."
							descricao="Este terreno precisa de limpeza."
						/>
						<AdminListCardAlt
							source="/assets/backup/36.jpg"
							titulo="Terreno 2" 
							nome="Rua Bruna Krasucki, 990, Parque Central"
							sobrenome="Perto da Pizzaria do Haroldo."
							descricao="Estamos precisando de que este terreno seja limpo."
						/>
						<AdminListCardAlt
							source="/assets/backup/37.jpeg"
							titulo="Terreno 3" 
							nome="Rua Gioconda Puschiavo, 1000, Jardim Monte Alto"
							sobrenome="Perto da Academia Templo."
							descricao="Alguém precisa limpar este terreno."
						/>
						<AdminListCardAlt
							source="/assets/backup/38.jpeg"
							titulo="Terreno 4" 
							nome="Rua Luiz Olivetti, 110, Jardim Prudentino"
							sobrenome="Perto do Espaço Leciana Oliveira."
							descricao="Nós temos interesse neste terreno, mas ele precisa de limpeza."
						/>
						<AdminListCardAlt
							source="/assets/backup/39.jpg"
							titulo="Terreno 5" 
							nome="Rua Quinze de Novembro, 1020, Vila Dubus"
							sobrenome="Perto do Feirão Oda."
							descricao="Solicitamos a limpeza deste terreno."
						/>
					</MidContentContainer>
				</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AdminTerreno;
