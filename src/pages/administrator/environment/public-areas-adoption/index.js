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
import Typography from "@mui/material/Typography";
import Footer from "../../../../components/footer";
import AdminListCard from "../../../../components/card-list-admin";

const AdminAdocaoAreas = () => {
	const [problems, setProblems] = useState([]);
	const [refresh, setRefresh] = useState(0);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/public_area_adoption');
				setProblems(data);
			}
			catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, [refresh]);

	return (
		<>
			<ContainerBase>
				<AdminHeader />
				<ContentContainer>
					<TopContentContainer>
						<MiniCard
							source="/assets/img/home_meio_ambiente.png"
							titulo="Meio Ambiente"
							linkItems={[
								{
									id: 1,
									name: "Adoção de Áreas Públicas",
									link: "/admin/adocao_areas_publicas",
								},
								{
									id: 2,
									name: "Monitoramento do Tempo",
									link: "/admin/monitoramento",
								},
								{
									id: 3,
									name: "Coleta de Lixo",
									link: "/admin/coleta-de-lixo",
								},
							]}
						/>
						<div style={{ marginTop: "14px" }}>
							<div style={{ textAlign: "center" }}>
								<Typography variant="h4">
									Adoção de Áreas Públicas
								</Typography>
							</div>
							<DescriptionText>
								Lista com todas as Áreas Públicas passíveis de adoção do município.
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
									userId={problem.userId}
									url="public_area_adoption"
									id={problem._id}
									setRefresh={setRefresh}
								/>
							))
						}
					</MidContentContainer>
				</ContentContainer>
				<Footer />
			</ContainerBase>
		</>
	);
};
export default AdminAdocaoAreas;
