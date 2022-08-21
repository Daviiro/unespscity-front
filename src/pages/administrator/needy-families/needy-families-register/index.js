import React, { useEffect, useState } from "react";
// import { api } from "../../../../services/api";
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

const AdminNeedyFamiliesRegister = () => {
/*	const [problems, setProblems] = useState([]);
	const [refresh, setRefresh] = useState(0);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get("/");
				setProblems(data);
			} catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, [refresh]);	*/

	return (
		<ContainerBase>
			<AdminHeader />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_familias_carentes.png"
						titulo="Famílias Carentes"
						linkItems={[
							{
								id: 1,
								name: "Registro de Familias Carentes",
								link: "/admin/familias_carentes",
							},
							{
								id: 2,
								name: "Moradores de Rua",
								link: "/admin/moradores_rua",
							},
							{
								id: 3,
								name: "Descarte Solidário",
								link: "/admin/descarte_solidario",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Familias Carentes
							</Typography>
						</div>
						<DescriptionText>
							Lista com todas as familias carentes e suas
							respectivas localizações
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
				{/*	{problems.map((problem) => (
						<AdminListCard
							key={problem._id}
							source={problem.images}
							nome={problem.street}
							sobrenome={problem.referencePoint}
							descricao={problem.description}
							report={true}
							userId={problem.userId}
							url="/"
							id={problem._id}
							setRefresh={setRefresh}
						/>
				))}	*/}
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default AdminNeedyFamiliesRegister;
