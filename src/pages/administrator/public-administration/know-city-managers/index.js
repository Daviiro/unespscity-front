import React, { useEffect, useState } from "react";
import { api } from "../../../../services/api";
import { Form } from "./styles";
import AdminHeader from "../../../../components/header/admin";
import MiniCard from "../../../../components/mini-card";
import Footer from "../../../../components/footer";
import Input from "../../../../components/input";
import DescriptionInput from "../../../../components/description-input";
import InputPhotos from "../../../../components/images-input";
import Button from "../../../../components/styled-components/form-button";
import AdminListCard from "../../../../components/card-list-admin";
import AdminServiceDescription from "../../../../components/styled-components/admin-service-description";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	MidContentContainer,
	DescriptionText,
} from "../../../../components/styled-components/PageStyles";
import Typography from "@mui/material/Typography";

const AdminGestores = () => {
	const [problems, setProblems] = useState([]);
	const [name, setName] = useState("");
	const [cargo, setCargo] = useState("");
	const [description, setDescription] = useState("");
	
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
	}, [ ]);

	return (
		<ContainerBase>
			<AdminHeader />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_administracao_publica.png"
						titulo="Administração Pública"
						linkItems={[
							{
								id: 1,
								name: "Central Anticorrupção",
								link: "/admin/central-anticorrupcao",
							},
							{
								id: 2,
								name: "Conheça os Gestores",
								link: "/admin/conheca_os_gestores",
							},
							{
								id: 3,
								name: "Consultar propostas de leis",
								link: "/admin/consultar-propostas-de-leis",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Conheça os Gestores
							</Typography>
						</div>
						<DescriptionText>
							Cadastre aqui todas as informações do Gestor para
							que fique disponível à população!
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
					<Form>
						<Input
							onChange={(e) => setName(e.target.value)}
							title="Nome do Gestor:"
						/>
						<Input
							onChange={(e) => setCargo(e.target.value)}
							title="Cargo:"
						/>
						<DescriptionInput
							title="Descrição:"
							placeholder="Nos conte em detalhes sobre o Gestor e seu Cargo."
							onChange={(e) => setDescription(e.target.value)}
						/>
						<InputPhotos />
						<Button text="Enviar" onClick />
					</Form>
					<AdminServiceDescription description="Aqui está a lista de todos os gestores cadastrados até o momento." />
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
export default AdminGestores;
