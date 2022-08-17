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
import Typography from "@mui/material/Typography";

const AdminAnimaisPerdidos = () => {
	const [problems, setProblems] = useState([]);

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
	}, [problems]);

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
export default AdminAnimaisPerdidos;
