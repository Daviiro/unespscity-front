import React, { useEffect, useState } from "react";
import { api } from "../../../../services/api";
import AdminHeader from "../../../../components/header/admin";
import MiniCard from "../../../../components/mini-card";
import Footer from "../../../../components/footer";
import AdminListCard from "../../../../components/card-list-admin";
import Typography from "@mui/material/Typography";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../../components/styled-components/PageStyles";

const AdminPontes = () => {
	const [problems, setProblems] = useState([]);
	const [refresh, setRefresh] = useState(0);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/praca');
				setProblems(data);
			}
			catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, [refresh]);

	return (
		<ContainerBase>
			<AdminHeader />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_conservacao_rural.png"
						titulo="Conservação Rural"
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
								Pontes em Estradas Rurais
							</Typography>
						</div>
						<DescriptionText>
							Lista com todas as evidências de estradas rurais em
							situações ruins relatadas pelos usuarios.
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
								url="rurais"
								id={problem._id}
								setRefresh={setRefresh}
							/>
						))
					}
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AdminPontes;
