import React, { useEffect, useState } from "react";
import { api } from "../../../../services/api";
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
import { Typography } from "@mui/material";

const AdminPiscinas = () => {
/*	const [problems, setProblems] = useState([]);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/limpeza_piscinas');
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
									Limpeza de Piscinas
								</Typography>
							</div>
							<DescriptionText>
								Lista com todas as piscinas que precisam ser 
								limpas segundo relatadas pelos usuarios.
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
							source="/assets/backup/30.jpg"
							titulo="Piscina 1" 
							nome="Rua Otorino Pereti, 93, Jardim Itaipu"
							sobrenome="Perto do Bar do Valcir."
							descricao="Esta piscina precisa de limpeza."
						/>
						<AdminListCardAlt
							source="/assets/backup/31.jpg"
							titulo="Piscina 2" 
							nome="Rua Antônio Pereira Teles, 940, Parque Shiraiwa"
							sobrenome="Perto do Bar Mercearia Fim de Tarde."
							descricao="Estamos precisando de que esta piscina seja limpa."
						/>
						<AdminListCardAlt
							source="/assets/backup/32.jpg"
							titulo="Piscina 3" 
							nome="Rua Francisco Nabas, 9500, Jardim Jequitiba"
							sobrenome="Perto do Félix Corretor e Avaliador de Imóveis."
							descricao="Alguém precisa limpar esta piscina."
						/>
						<AdminListCardAlt
							source="/assets/backup/33.jpg"
							titulo="Piscina 4" 
							nome="Rua Kotaro Takahashi, 960, Conjunto Habitacional Ana Jacinta"
							sobrenome="Perto da E.e Antônio Moreira Lima."
							descricao="Nós gostaríamos de usar a piscinas pública, mas ela precisa de limpeza."
						/>
						<AdminListCardAlt
							source="/assets/backup/34.jpg"
							titulo="Piscina 5" 
							nome="Rua Padre João Goetz, 9070, Vila Euclides"
							sobrenome="Perto do Colégio Multiplus."
							descricao="Solicitamos a limpeza desta piscina."
						/>
					</MidContentContainer>
				</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AdminPiscinas;
