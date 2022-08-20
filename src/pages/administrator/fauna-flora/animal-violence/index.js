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

const AdminMausTratosAnimais = () => {
/*	const [problems, setProblems] = useState([]);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/maus_tratos_animais');
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
						source="/assets/img/home_fauna_flora.png"
						titulo="Fauna e Flora"
						linkItems={[
							{
								id: 1,
								name: "Fiscalização de Animais Silvestres",
								link: "/admin/animais_silvestres",
							},
							{
								id: 2,
								name: "Maus tratos à Animais",
								link: "/admin/maus_tratos",
							},
							{
								id: 3,
								name: "Maus tratos à Animais",
								link: "/admin/arvores",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Maus tratos à Animais
							</Typography>
						</div>
						<DescriptionText>
							Lista com todas as denúncias de maus tratos à
							animais silvestres e domésticos.
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
						source="/assets/backup/51.jpg"
						titulo="Animal 1" 
						nome="Rua Salim Macruz, 13, Vila Real"
						sobrenome="Perto do Sr. Delivery."
						descricao="Abuso de animal doméstico."
					/>
					<AdminListCardAlt
						source="/assets/backup/52.jpg"
						titulo="Animal 2" 
						nome="Rua César Audi, 104, Jardim Jequitiba"
						sobrenome="Perto da Quadra Municipal."
						descricao="Cachorro sofrendo maus-tratos."
					/>
					<AdminListCardAlt
						source="/assets/backup/53.jpg"
						titulo="Animal 3" 
						nome="Rua Hélio Pereti, 1500, Jardim Campo Belo"
						sobrenome="Perto da loja Budin Ferramentas."
						descricao="Toda noite ouvimos alguém gritando com um cachorro."
					/>
					<AdminListCardAlt
						source="/assets/backup/54.jpg"
						titulo="Animal 4" 
						nome="Rua Maria Ângela de Oliveira Esterque, 160, Jardim Santa Fé"
						sobrenome="Perto da rodovia Júlio Budiski."
						descricao="Gato violentado."
					/>
					<AdminListCardAlt
						source="/assets/backup/55.jpg"
						titulo="Animal 5" 
						nome="Rua Reverendo Coriolano, 1070, Jardim Aviação"
						sobrenome="Perto do Prudesan Engenharia."
						descricao="Um homem captura pássaros e os mantém em cativeiro."
					/>
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AdminMausTratosAnimais;
