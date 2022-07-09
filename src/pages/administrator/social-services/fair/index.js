import React, { useState } from "react";

import {
	Details,
	Form,
	SubHeader,
	ContainerColumn,
	Square,
	AddFair,
} from "./styles";

import Header from "../../../../components/header";
import MiniCard from "../../../../components/mini-card";
import ServiceDescription from "../../../../components/service-description";
import Footer from "../../../../components/footer";
import InputPhotos from "../../../../components/images-input";
import Input from "../../../../components/input";
import DescriptionInput from "../../../../components/description-input";
import AdminListCard from "../../../../components/card-list-admin";
import AdminServiceDescription from "../../../../components/styled-components/admin-service-description";

import Typography from "@mui/material/Typography";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../../components/styled-components/PageStyles";
import { StyledHr } from "../../../../components/styled-components/StyledHr";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const AdminFeiras = () => {
	const [street, setStreet] = useState();
	const [district, setDistrict] = useState();
	const [description, setDescription] = useState();
	const handleStreetChange = (event) => {
		setStreet(event.target.value);
	};
	const handleDistrictChange = (event) => {
		setDistrict(event.target.value);
	};
	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};

	const feirasDadoMockup = [
		{
			street: "esplanada",
			district: "Washington Luiz",
			operatingDay: [
				{ dia: "monday", horaInicio: 14, horaFim: 18 },
				{ dia: "tuesday", horaInicio: 14, horaFim: 18 },
			],
			description: "EH uma feira com pastel muito gostoso",
		},
	];

	return (
		<ContainerBase>
			<Header />
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
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">Feiras Livres</Typography>
						</div>
						<DescriptionText>
							Aqui, você administrador, pode cadastrar o endereço
							e horários das feiras na cidade
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
								label="Rua"
								variant="outlined"
								value={street}
								onChange={handleStreetChange}
							/>
							<TextField
								fullWidth
								id="outlined-basic"
								label="Bairro"
								variant="outlined"
								value={district}
								onChange={handleDistrictChange}
							/>
						</Stack>
						<br />
						<Stack spacing={2} direction="row">
							<Input
								title="Dia / Horario:"
								placeholder="Exemplo: Sexta - 6h15 às 12h"
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
								value={description}
								onChange={handleDescriptionChange}
							/>
						</Stack>
						<br />
						<Button fullWidth variant="contained">
							+ Adicionar feira
						</Button>
					</AddFair>
					<br />
					<Details>
						<AdminListCard
							source="/assets/img/home_assistencia_social.png"
							nome="Nome"
							sobrenome="Telefone"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source="/assets/img/home_assistencia_social.png"
							nome="Nome"
							sobrenome="Telefone"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source="/assets/img/home_assistencia_social.png"
							nome="Nome"
							sobrenome="Telefone"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source="/assets/img/home_assistencia_social.png"
							nome="Nome"
							sobrenome="Telefone"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source="/assets/img/home_assistencia_social.png"
							nome="Nome"
							sobrenome="Telefone"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
						<AdminListCard
							source="/assets/img/home_assistencia_social.png"
							nome="Nome"
							sobrenome="Telefone"
							descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>
					</Details>
				</MidContentContainer>
			</ContentContainer>

			<Footer />
		</ContainerBase>
	);
};
export default AdminFeiras;
