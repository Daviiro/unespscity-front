import React, { useEffect, useState } from "react";
import { api } from "../../../../services/api";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../../components/styled-components/PageStyles";
import AdminHeader from "../../../../components/header/admin";
import MiniCard from "../../../../components/mini-card";
import Typography from "@mui/material/Typography";
import Footer from "../../../../components/footer";
import AdminListCard from "../../../../components/card-list-admin";

const AdminDiaristas = () => {
	const [problems, setProblems] = useState([]);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get("/diaristjanitor");
				setProblems(data);
			} catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, []);

	return (
		<ContainerBase>
			<AdminHeader />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_servicos_sociais.png"
						titulo="Serviços Sociais"
						linkItems={[
							{
								id: 1,
								name: "Feiras Livres",
								link: "/admin/feiras_livres",
							},
							{
								id: 2,
								name: "Diaristas",
								link: "/admin/diaristas",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Cadastro de Diaristas
							</Typography>
						</div>
						<DescriptionText>
							Lista com todos(as) os(as) diaristas, faxineiros(as)
							e zeladores(as) cadastrados no município.
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
					{problems.length != 0 ? (
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
					) : (
						<>Sem dados no banco de dados</>
					)}
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AdminDiaristas;
