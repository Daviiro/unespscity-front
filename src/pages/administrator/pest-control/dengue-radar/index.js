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

const AdminDengue = () => {
/*	const [problems, setProblems] = useState([]);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/radar_dengue');
				setProblems(data);
			}
			catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, [ ]);	*/

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
									Radar da Dengue
								</Typography>
							</div>
							<DescriptionText>
								Lista com todos os focos de Dengue 
								que são relatados pelos usuarios.
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
							source="/assets/backup/56.jpg"
							titulo="Dengue 1" 
							nome="Rua Manoel de Jesus Rodrigues, 18, Uep4-S.3"
							sobrenome="Perto da JCVM Materiais de Construção."
							descricao="Encontramos um foco do mosquito da dengue."
						/>
						<AdminListCardAlt
							source="/assets/backup/57.jpg"
							titulo="Dengue 2" 
							nome="Rua dos Abacateiros, 190, Jardim São Gabriel"
							sobrenome="Perto da Restaurante e Marmitex Naiara."
							descricao="Encontramos um foco do aedes aegypti."
						/>
						<AdminListCardAlt
							source="/assets/backup/58.jpg"
							titulo="Dengue 3" 
							nome="Rua Imil Ésper, 1100, Jardim Cambui"
							sobrenome="Perto da Transtec Comércio de Peças."
							descricao="Encontramos um local propício para a reprodução do mosquito."
						/>
						<AdminListCardAlt
							source="/assets/backup/59.jpg"
							titulo="Dengue 4" 
							nome="Rua Nestor Guermandi, 101, Parque Shiraiwa"
							sobrenome="Perto da RavelliDoces."
							descricao="Havistamos pernilongos da dengue. Deve haver um foco aqui nas redondezas."
						/>
						<AdminListCardAlt
							source="/assets/backup/60.jpg"
							titulo="Dengue 5" 
							nome="Rua São Sebastião, 1020, Vila Machadinho"
							sobrenome="Perto do Sabor e Cia."
							descricao="Encontramos água parada com o que acreditamos ser larvas do aedes aegypti, além de termos visto uns dois voando."
						/>
					</MidContentContainer>
				</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AdminDengue;
