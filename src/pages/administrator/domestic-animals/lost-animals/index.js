import React, { useEffect, useState } from "react";
import { api } from "../../../../services/api";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	MidContentContainer,
	DescriptionText,
} from "../../../../components/styled-components/PageStyles";
import AdminHeader from "../../../../components/header/admin";
import MiniCard from "../../../../components/mini-card";
import Footer from "../../../../components/footer";
import AdminListCard from "../../../../components/card-list-admin";
import AdminListCardAlt from "../../../../components/card-list-admin/alternative";
import Typography from "@mui/material/Typography";

const AdminAnimaisPerdidos = () => {
/*	const [problems, setProblems] = useState([]);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/animais_perdidos');
				setProblems(data);
			}
			catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, []);	*/

	return (
		<ContainerBase>
			<AdminHeader />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_animais_domesticos.png"
						titulo="Animais Domésticos"
						linkItems={[
							{
								id: 1,
								name: "Animais Abandonados",
								link: "/admin/animais_abandonados",
							},
							{
								id: 2,
								name: "Animais Perdidos",
								link: "/admin/animais_perdidos",
							},
							{
								id: 3,
								name: "Maus tratos à Animais",
								link: "/admin/maus_tratos",
							},
							{
								id: 4,
								name: "Animais Sinantrópicos",
								link: "/admin/animais-sinantropicos",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Animais Perdidos
							</Typography>
						</div>
						<DescriptionText>
							Lista com todas as ocorrências de animais perdidos
							no município.
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
						source="/assets/backup/11.jpg"
						titulo="Animal 1" 
						nome="Rua Antônio Pereira Teles, 68, Parque Shiraiwa"
						sobrenome="Perto do Bar Mercearia Fim de Tarde."
						descricao="Perdi meu cachorro. Ele atende pelo nome de Max. Visto pela última vez dia 17 de outubro de 2022."
					/>
					<AdminListCardAlt
						source="/assets/backup/12.jpg"
						titulo="Animal 2" 
						nome="Rua Bruna Krasucki, 690, Parque Central"
						sobrenome="Perto da Pizzaria do Haroldo."
						descricao="Perdi meu gato. Ele atende pelo nome de Spot. Visto pela última vez 22 de fevereiro de 2022."
					/>
					<AdminListCardAlt
						source="/assets/backup/13.jpg"
						titulo="Animal 3" 
						nome="Rua César Audi, 7000, Jardim Jequitiba"
						sobrenome="Perto da Quadra Municipal."
						descricao="Perdi minha cadela. Ela atende pelo nome de Jeh. Vista pela última vez anteontem."
					/>
					<AdminListCardAlt
						source="/assets/backup/14.jpg"
						titulo="Animal 4" 
						nome="Rua dos Abacateiros, 701, Jardim São Gabriel"
						sobrenome="Perto da Restaurante e Marmitex Naiara."
						descricao="Perdi minha gata. Ela atende pelo nome de Fifi. Vista pela última vez domingo passado."
					/>
					<AdminListCardAlt
						source="/assets/backup/15.jpg"
						titulo="Animal 5" 
						nome="Rua Ernesto Brogiatto, 7002, Jardim Balneario"
						sobrenome="Perto do Supermercado Transfiguração."
						descricao="Perdi meu jabuti. Ele tem uma rachadura na casca. Visto pela última vez na virada do mês."
					/>
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AdminAnimaisPerdidos;
