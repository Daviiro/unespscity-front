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

const AdminParques = () => {
	const [problems, setProblems] = useState([]);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/');
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
						source="/assets/img/home_conservacao_rural.png"
						titulo="Conservação de Areas Verdes"
						linkItems={[
							{
								id: 1,
								name: "Parques",
								link: "/admin/parques",
							},
							{
								id: 2,
								name: "Pontes em estradas rurais",
								link: "/admin/pontes_em_estradas_rurais",
							},
							{
								id: 3,
								name: "Praças",
								link: "/admin/pracas",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Parques
							</Typography>
						</div>
						<DescriptionText>
							Lista com todas as ocorrências em
							parques públicos da cidade, como solicitação de
							limpeza, informações sobre ocupação indevida, queimadas e
							demais irregularidades e/ou sugestões.
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
export default AdminParques;
