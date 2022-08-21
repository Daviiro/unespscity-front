import React, { useEffect, useState } from "react";
// import { api } from "../../../../services/api";
import AdminHeader from "../../../../components/header/admin";
import MiniCard from "../../../../components/mini-card";
import Footer from "../../../../components/footer";
import Typography from "@mui/material/Typography";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../../components/styled-components/PageStyles";
import AdminListCard from "../../../../components/card-list-admin";
import AdminListCardAlt from "../../../../components/card-list-admin/alternative";

const AdminAdoptionAnimals = () => {
/*	const [problems, setProblems] = useState([]);
	const [refresh, setRefresh] = useState(0);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/adocao_animais');
				setProblems(data);
			}
			catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, [refresh]);	*/

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
								link: "/admin/animais_perdidos_opcoes",
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
                            {
								id: 5,
								name: "Adoção de Animais",
								link: "/admin/adocao_animais",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Doação de Animais 
							</Typography>
						</div>
						<DescriptionText>
							Lista de todas as notificações sobre doações de animais 
							feitas pelo usuario.
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
				{/*	{
						problems.map((problem) => (
							<AdminListCard
								key={problem._id}
								source={problem.images}
								nome={problem.owner}
								sobrenome={problem.date}
								descricao={problem.description}
								report={true}
								userId={problem.idUser}
								url="adocao_animais"
								id={problem._id}
								setRefresh={setRefresh}
							/>
						))
					}	*/}
					<AdminListCardAlt
						source="/assets/backup/01.jpg"
						titulo="Animal 1" 
						nome="Marcos Cardoso da Silva"
						sobrenome="28/02/2022"
						descricao="Estou doando este cachorro."
					/>
					<AdminListCardAlt
						source="/assets/backup/02.jpg"
						titulo="Animal 2" 
						nome="Giovanna Marques"
						sobrenome="28/02/2022"
						descricao="Estou doando este gato."
					/>
					<AdminListCardAlt
						source="/assets/backup/03.jpg"
						titulo="Animal 3" 
						nome="José Espinati"
						sobrenome="02/04/2022"
						descricao="Estou doando esta cadela."
					/>
					<AdminListCardAlt
						source="/assets/backup/04.jpg"
						titulo="Animal 4" 
						nome="Andressa Valéria"
						sobrenome="18/04/2022"
						descricao="Estou doando esta gata."
					/>
					<AdminListCardAlt
						source="/assets/backup/05.jpg"
						titulo="Animal 5" 
						nome="Juan Marques Jr."
						sobrenome="20/05/2022"
						descricao="Estou doando este pato."
					/>
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
}

export default AdminAdoptionAnimals;