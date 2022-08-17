import React, { useEffect, useState } from "react";
import { api } from "../../../../services/api";
import { Details, AddFair } from "./styles";
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
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AdminCulturalProgram = () => {
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
						source="/assets/img/home_servicos_sociais.png"
						titulo="Serviços Sociais"
						linkItems={[
							{
								id: 1,
								name: "Telefones Úteis",
								link: "/admin/telefones_uteis",
							},
							{
								id: 2,
								name: "Cadastro de Túmulos e Falecidos",
								link: "/admin/tumulos",
							},
							{
								id: 3,
								name: "Programação Cultural",
								link: "/admin/programacao_cultural",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">Programação Cultural</Typography>
						</div>
						<DescriptionText>
							Aqui, você administrador, pode cadastrar os programas culturais que sejam úteis para a população.   
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
					<AddFair>
						<Stack spacing={2} direction="row">
							<TextField
								fullWidth
								id="outlined-basic"
								label="Nome do Evento"
								variant="outlined"
							/>
						</Stack>
						<br />
						<Stack spacing={2} direction="row">
							<TextField
								fullWidth
								id="outlined-basic"
								label="Local"
								variant="outlined"
							/>
						</Stack>
						<br />
						<Stack spacing={2} direction="row">
							<TextField
								fullWidth
								id="outlined-basic"
								label="Descrição"
								variant="outlined"
								multiline
								rows={5}
							/>
						</Stack>
						<br />
						<Button fullWidth variant="contained">
							+ Adicionar Programa Cultural
						</Button>
					</AddFair>
					<br />
					<Details>
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
					</Details>
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
}

export default AdminCulturalProgram;