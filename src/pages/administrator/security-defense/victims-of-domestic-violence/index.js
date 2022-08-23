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
import { StyledHr } from "../../../../components/styled-components/StyledHr";
import AdminListCard from "../../../../components/card-list-admin";
import Footer from "../../../../components/footer";

const AdminVictimsOfDomesticViolence = () => {
	const [problems, setProblems] = useState([]);
	const [refresh, setRefresh] = useState(0);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get("/domesticviolence");
				setProblems(data);
			} catch (e) {
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
						source="/assets/img/home_seguranca_defesa_civil.png"
						titulo="Segurança e Defesa Civil"
						linkItems={[
							{
								id: 1,
								name: "Registro de Roubos e Furtos",
								link: "/admin/registro_roubos",
							},
							{
								id: 2,
								name: "Violência Doméstica",
								link: "/admin/violencia-domestica",
							},
							{
								id: 3,
								name: "Registro de Acidentes",
								link: "/admin/registro-acidentes",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Lista de casos de violência doméstica
								registrados
							</Typography>
						</div>
						<DescriptionText>
							Aqui você pode conferir as denúncias de casos de
							violência doméstica, podendo então entrar em contato
							com as autoridades que possam resolver o problema em
							questão.
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
					{problems.length != 0 ? (
						problems.map((problem) => (
							<AdminListCard
								key={problem._id}
								source={problem.images}
								nome={problem.name}
								sobrenome={problem.cpf}
								descricao={problem.description}
								report={true}
								url="domesticviolence"
								id={problem._id}
								setRefresh={setRefresh}
							/>
						))
					) : (
						<>Sem dados no banco de dados</>
					)}
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default AdminVictimsOfDomesticViolence;
