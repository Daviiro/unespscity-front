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

const AnimaisAbandonados = () => {
/*	const [problems, setProblems] = useState([]);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/animais_abandonados');
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
								Animais Abandonados
							</Typography>
						</div>
						<DescriptionText>
							Lista de todas as notificações sobre animais
							Abandonados na rua.
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
						source="/assets/backup/06.jpeg"
						titulo="Animal 1" 
						nome="Rua Otorino Pereti, Jardim Itaipu"
						sobrenome="Perto do Bar do Valcir."
						descricao="Encontrei este cachorro abandonado."
					/>
					<AdminListCardAlt
						source="/assets/backup/07.jpg"
						titulo="Animal 2" 
						nome="Rua José Albertoni, Jardim Tropical"
						sobrenome="Perto da Sorveteria Nápoles."
						descricao="Encontrei este gato abandonado."
					/>
					<AdminListCardAlt
						source="/assets/backup/08.jpeg"
						titulo="Animal 3" 
						nome="Rua Salim Macruz, Vila Real"
						sobrenome="Perto do Sr. Delivery."
						descricao="Encontrei este cachorro abandonado."
					/>
					<AdminListCardAlt
						source="/assets/backup/09.JPG"
						titulo="Animal 4" 
						nome="Rua Manoel de Jesus Rodrigues, Uep4-S.3"
						sobrenome="Perto da JCVM Materiais de Construção."
						descricao="Encontrei este gato abandonado."
					/>
					<AdminListCardAlt
						source="/assets/backup/10.jpg"
						titulo="Animal 5" 
						nome="Rua Gino Piron, Vale do Sol"
						sobrenome="Perto do Sky Beer Bar."
						descricao="Encontrei este cavalo abandonado."
					/>
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AnimaisAbandonados;
