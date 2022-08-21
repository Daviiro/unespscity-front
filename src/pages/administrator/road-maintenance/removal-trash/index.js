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

const AdminResiduosSolidos = () => {
	const [problems, setProblems] = useState([]);
	const [refresh, setRefresh] = useState(0);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get("/removetrash");
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
						source="/assets/img/home_remocao_detritos.png"
						titulo="Remoção de Detritos"
						linkItems={[
							{
								id: 1,
								name: "Animais Mortos",
								link: "/admin/animais_mortos",
							},
							{
								id: 2,
								name: "Resíduos Sólidos",
								link: "/residuos_solidos",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Resíduos Sólidos
							</Typography>
						</div>
						<DescriptionText>
							A lista de todos os pedidos para retirar os resíduos
							sólidos.
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
								nome={problem.street}
								sobrenome={problem.referencePoint}
								descricao={problem.description}
								report={true}
								userId={problem.userId}
								url="removetrash"
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
export default AdminResiduosSolidos;
