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

const AdminMonumentos = () => {
	const [problems, setProblems] = useState([]);
	const [refresh, setRefresh] = useState(0);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get("/monument");
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
								Monumentos e Chafarizes
							</Typography>
						</div>
						<DescriptionText>
							Lista com todas as ocorrências de monumentos e
							chafarizes da cidade com vandalização, solicitação
							de limpeza, destruição e/ou outras irregularidades."
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
					{problems.map((problem) => (
						<AdminListCard
							key={problem._id}
							source={problem.images}
							nome={problem.street}
							sobrenome={problem.referencePoint}
							descricao={problem.description}
							report={true}
							status={true}
							problemStatus={problem.serviceStatus}
							userId={problem.userId}
							url="monument"
							url_put_status="monument/update_resolved"
							id={problem._id}
							setRefresh={setRefresh}
						/>
					))}
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AdminMonumentos;
