import React, { useEffect, useState } from "react";
import { api } from "../../../../services/api";
import AdminHeader from "../../../../components/header/admin";
import MiniCard from "../../../../components/mini-card";
import Footer from "../../../../components/footer";
import AdminListCard from "../../../../components/card-list-admin";
import AdminListCardAlt from "../../../../components/card-list-admin/alternative";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	MidContentContainer,
	DescriptionText,
} from "../../../../components/styled-components/PageStyles";
import Typography from "@mui/material/Typography";

const AdminTumulos = () => {
/*	const [problems, setProblems] = useState([]);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/tumulos');
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
						source="/assets/img/home_assistencia_social.png"
						titulo="Assistência Social"
						linkItems={[
							{
								id: 1,
								name: "Locais Úteis",
								link: "/admin/locais_uteis",
							},
							{
								id: 2,
								name: "Telefones Úteis",
								link: "/admin/telefones_uteis",
							},
							{
								id: 3,
								name: "Programação Cultural",
								link: "/admin/programacao_cultural",
							},
							{
								id: 4,
								name: "Cadastro de Túmulos e Falecidos",
								link: "/admin/tumulos",
							},
							{
								id: 3,
								name: "Programação Cultural",
								link: "/admin/programacao_cultural",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Cadastro de Túmulos e Falecidos
							</Typography>
						</div>
						<DescriptionText>
							Lista com todos as notas de túmulos e falecidos
							cadastrados no sistema.
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
						source="/assets/backup/61.jpg"
						titulo="Tumulo 1" 
						nome="Falecimento: 19/04/2020"
						sobrenome="Cemitério Municipal São João Batista"
						descricao="Lápide 1130"
					/>
					<AdminListCardAlt
						source="/assets/backup/61.jpg"
						titulo="Tumulo 2" 
						nome="Falecimento: 20/02/2021"
						sobrenome="Cemitério Municipal Campal Parque da Paz"
						descricao="Lápide 1140"
					/>
					<AdminListCardAlt
						source="/assets/backup/61.jpg"
						titulo="Tumulo 3" 
						nome="Falecimento: 28/03/2022"
						sobrenome="Cemitério Municipal Campal Parque da Paz"
						descricao="Lápide 1150"
					/>
					<AdminListCardAlt
						source="/assets/backup/61.jpg"
						titulo="Tumulo 4" 
						nome="Falecimento: 05/05/2022"
						sobrenome="Cemitério Municipal São João Batista"
						descricao="Lápide 1160"
					/>
					<AdminListCardAlt
						source="/assets/backup/61.jpg"
						titulo="Tumulo 5" 
						nome="Falecimento: 05/10/2020"
						sobrenome="Cemitério Municipal Campal Parque da Paz"
						descricao="Lápide 1170"
					/>
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AdminTumulos;
