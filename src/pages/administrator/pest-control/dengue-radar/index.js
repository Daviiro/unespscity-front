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
import Footer from "../../../../components/footer";

const AdminDengue = () => {
	const [problems, setProblems] = useState([]);

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
	}, [problems]);

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
						{
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
						}
					</MidContentContainer>
				</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AdminDengue;
