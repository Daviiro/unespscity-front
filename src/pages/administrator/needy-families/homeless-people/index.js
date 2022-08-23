import React, { useEffect, useState } from "react";
import { api } from "../../../../services/api";
import AdminHeader from "../../../../components/header/admin";
import MiniCard from "../../../../components/mini-card";
import AdminListCard from "../../../../components/card-list-admin";
import Footer from "../../../../components/footer";
import Typography from "@mui/material/Typography";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../../components/styled-components/PageStyles";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { StyledHr } from "../../../../components/styled-components/StyledHr";
import { AddContainer } from "./styles";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import InputPhotos from "../../../../components/images-input";

const AdminHomelessPeople = () => {
	const [problems, setProblems] = useState([]);
	const [refresh, setRefresh] = useState(0);
	const [rg, setRg] = useState("");
	const [cpf, setCpf] = useState("");
	const [description, setDescription] = useState("");
	const [photos, setPhotos] = useState([]);
	const [name, setName] = useState("");

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get("/homelesspeople");
				setProblems(data);
			} catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, [refresh]);

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = JSON.parse(localStorage.getItem("locationLocalStorage"));

		try {
			if (name === "") {
				alert("É necessário inserir o nome do morador de rua");
				return;
			}
			if (rg === "") {
				alert("É necessário inserir o RG do morador de rua");
				return;
			}
			if (cpf === "") {
				alert("É necessário inserir o CPF do morador de rua");
				return;
			}
			if (description === "") {
				alert("É necessário inserir a descrição");
				return;
			}

			api.post("/homelesspeople", {
				data: {
					cityId: data.city,
					name: name,
					rg: rg,
					cpf: cpf,
					birthday: new Date(),
					latitude: -1,
					longitude: -1,
					description: description,
					images: photos,
					date: new Date(),
				},
			}).then((res) => {
				alert("Morador cadastrado com sucesso");
				console.log(res.status);
			});
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<ContainerBase>
			<AdminHeader />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_familias_carentes.png"
						titulo="Familias Carentes"
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
								Moradores de Rua
							</Typography>
						</div>
						<DescriptionText>
							Aqui temos a lista dos moradores de rua, as
							informações sobre eles e o historico.
						</DescriptionText>
					</div>
					<div></div>
					<StyledHr />
				</TopContentContainer>
				<MidContentContainer>
					<AddContainer>
						<form onSubmit={handleSubmit}>
							<TextField
								name="name"
								fullWidth
								id="outlined-basic"
								label="Nome do morador de rua"
								variant="outlined"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
							<br />
							<br />
							<TextField
								name="cpf"
								fullWidth
								id="outlined-basic"
								label="CPF do morador de rua"
								variant="outlined"
								value={cpf}
								onChange={(e) => setCpf(e.target.value)}
							/>
							<br />
							<br />
							<TextField
								name="rg"
								fullWidth
								id="outlined-basic"
								label="RG do morador de rua"
								variant="outlined"
								value={rg}
								onChange={(e) => setRg(e.target.value)}
							/>
							<br />
							<br />
							<TextField
								name="descricao"
								fullWidth
								id="outlined-basic"
								label="Descrição"
								variant="outlined"
								multiline
								rows={5}
								value={description}
								helperText={
									"Descreva aqui detalhes sobre a situação do morador de rua"
								}
								onChange={(e) => setDescription(e.target.value)}
							/>
							<br />
							<InputPhotos
								photos={photos}
								setPhotos={setPhotos}
							/>
							<br />
							<Button
								fullWidth
								variant="contained"
								type="submit"
								value="Enviar"
							>
								Enviar
							</Button>
						</form>
					</AddContainer>
					<br />

					{problems.map((problem) => (
						<AdminListCard
							key={problem._id}
							source={problem.images}
							nome={problem.name}
							sobrenome={problem.cpf}
							descricao={problem.description}
							report={true}
							url="homelesspeople"
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

export default AdminHomelessPeople;
