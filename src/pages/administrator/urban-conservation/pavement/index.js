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

const AdminPavimentacao = () => {
	const [problems, setProblems] = useState([]);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/paviment');
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
							source="/assets/img/home_conservacao_urbana.png"
							titulo="Conservação Urbana"
							linkItems={[
								{
									id: 1,
									name: "Fiscalização de Instalações",
									link: "/admin/fiscalizacao_de_instalacoes",
								},
								{
									id: 2,
									name: "Iluminação Pública",
									link: "/admin/iluminacao_publica",
								},
								{
									id: 3,
									name: "Monumentos e Chafarizes",
									link: "/admin/monumentos_e_chafarizes",
								},
								{
									id: 4,
									name: "Pavimentação",
									link: "/admin/pavimentacao",
								},
								{
									id: 5,
									name: "Vias Públicas",
									link: "/admin/vias_publicas",
								},
							]}
						/>
						<div style={{ marginTop: "14px" }}>
							<div style={{ textAlign: "center" }}>
								<Typography variant="h4">
									Pavimentação
								</Typography>
							</div>
							<DescriptionText>
								Lista com todas as pavimentações em 
								situações ruins relatadas pelos usuarios.
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
export default AdminPavimentacao;
