import React, { useState } from "react";
import { Details, AddFair } from "./styles";
import Header from "../../../../components/header";
import MiniCard from "../../../../components/mini-card";
import Footer from "../../../../components/footer";
import Input from "../../../../components/input";
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
import FairsMap from "./fairs-map";
import Modal from "./modal";
import axios from "axios";

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

	const [locations, setLocations] = useState([
		{
			id: 1,
			name: "Feira 1",
			imgsrc: "/assets/img/fair-icon.png",
			operatingDays: {
				dom: true,
				seg: false,
				ter: false,
				qua: false,
				qui: false,
				sex: false,
				sab: true,
			},
			location: {
				lat: -22.2,
				lng: -51.40933,
			},
			openingHour: new Date(),
			closingHour: new Date(),
		},
		{
			id: 2,
			name: "Feira 2",
			imgsrc: "/assets/img/fair-icon.png",
			operatingDays: {
				dom: true,
				seg: false,
				ter: false,
				qua: false,
				qui: false,
				sex: false,
				sab: true,
			},
			location: {
				lat: -22.131951,
				lng: -51.40933,
			},
			openingHour: new Date(),
			closingHour: new Date(),
		},
	]);
	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const handleAdd = (fair) => {
		setLocations([...locations, fair]); //adiciono a nova feira no array
		console.log(fair.openingHour);
		setOpen(false);
		console.log("antes de mandar: " + fair.cityid);

		//testando a conexao com o backend
		axios
			.post("http://localhost:4000/api/fair", {
				headers: {
					"Content-Type": "application/json; charset=UTF-8",
					Accept: "Token",
					"Access-Control-Allow-Origin": "*",
				},
				data: {
					cityid: fair.cityid,
					name: fair.name,
					imgsrc: fair.imgsrc,
					operatingDays: fair.operatingDays,
					location: fair.location,
					openingHour: fair.openingHour,
					closingHour: fair.closingHour,
				},
			})
			.then((res) => {
				console.log("feira adicionada: " + res.data.name);
			});
	};
	const [clickedCoordinates, setClickedCoordinates] = useState({
		lat: 0,
		lng: 0,
	});
	const onMapClick = (coords) => {
		setClickedCoordinates(coords);
		handleClickOpen();
	};

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
							{
								id: 2,
								name: "Diaristas",
								link: "/admin/diaristas",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">Feiras Livres</Typography>
						</div>
						<DescriptionText>
							Aqui, você administrador, pode cadastrar o endereço
							e horários das feiras na cidade, para adicionar uma
							nova feira basta clicar na parte do mapa referente
							ao endereço da feira que deseja realizar.
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
					<FairsMap
						locations={locations}
						icon="/assets/img/fair-icon.png"
						onMapClick={onMapClick}
					/>
					<Modal
						locations={locations}
						open={open}
						clickedCoordinates={clickedCoordinates}
						handleClose={handleClose}
						handleAdd={handleAdd}
					/>
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AdminFeiras;
