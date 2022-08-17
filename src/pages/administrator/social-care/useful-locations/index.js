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
import UsefulLocationsModal from "../../../social-care/useful-locations/modal";
import AdminListCard from "../../../../components/card-list-admin";
import UsefulLocationsMap from "./map";
import Footer from "../../../../components/footer";

const LocaisUteisAdmin = () => {
	const [problems, setProblems] = useState([]);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/locais_uteis');
				setProblems(data);
			}
			catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, [problems]);

	const [clickedCoordinates, setClickedCoordinates] = useState({
		lat: 0,
		lng: 0,
	});

	const [locations, setLocations] = useState([
		{
			id: 1,
			name: "Cidade da Criança",
			imgsrc: "/assets/img/default-location.png",
			phone: "(18)3902-9233",
			opening_hours: "Sexta à Domingo, das 10:00 às 16:00",
			location: {
				lat: -22.1833458,
				lng: -51.3853208,
			},
		},
		{
			id: 2,
			name: "Parque do Povo",
			imgsrc: "/assets/img/default-location.png",
			phone: "(18)3902-9340",
			opening_hours: "Aberto 24 horas",
			location: {
				lat: -22.1281034,
				lng: -51.4002568,
			},
		},
		{
			id: 3,
			name: "Centro Histórico Cultural Matarazzo",
			imgsrc: "/assets/img/default-location.png",
			phone: "(18)3226-3399",
			opening_hours: "Domingo das 10:00 às 22:00, segunda à sábado das 08:30 às 22:00",
			location: {
				lat: -22.1206503,
				lng: -51.3793409,
			},
		},
		{
			id: 4,
			name: "Balneário da Amizade",
			imgsrc: "/assets/img/default-location.png",
			phone: "(18)99742-7655",
			opening_hours: "Das 07:00 às 19:00 todos os dias",
			location: {
				lat: -22.1057482,
				lng: -51.4432070,
			},
		},
		{
			id: 5,
			name: "Museu e Arquivo Histórico Municipal",
			imgsrc: "/assets/img/default-location.png",
			phone: "(18)3223-9404",
			opening_hours: "Terça à sexta, das 08:30 às 16:30",
			location: {
				lat: -22.1163284,
				lng: -51.4115662,
			},
		},
		{
			id: 6,
			name: "Catedral de São Sebastião",
			imgsrc: "/assets/img/default-location.png",
			phone: "(18)3223-2016",
			opening_hours: "Todos os dias, das 07:00 às 10:00",
			location: {
				lat: -22.1225433,
				lng: -51.3886604,
			},
		},
	]);

	const [open, setOpen] = useState(false);
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const onMapClick = (coords) => {
		//console.log(open);
		setClickedCoordinates(coords);
		handleClickOpen();
	};
	const handleAdd = (Location) => {
		setLocations([...locations, Location]); //adiciono a novo local no array
		setOpen(false);
	};

	const handleDelete = (Location) => {
		console.log(
			"quero deletar o local: " +  Location.name
		);
	};

	return (
		<ContainerBase>
			<AdminHeader />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_assistencia_social.png"
						titulo="Assistência Social"
						linkItems={[
							{
								id: 1,
								name: "Locais Úteis",
								link: "/admin/locais_uteis",
							},
							{
								id: 2,
								name: "Telefones Úteis",
								link: "/admin/telefones_uteis",
							},
							{
								id: 3,
								name: "Programação Cultural",
								link: "/admin/programacao_cultural",
							},
							{
								id: 4,
								name: "Cadastro de Túmulos e Falecidos",
								link: "/admin/tumulos",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">Locais Úteis</Typography>
						</div>
						<DescriptionText>
							Aqui, você administrador, pode addicionar novos
							locais úteis ao cidadão ou remover locais adicionados
							por um administrador ou usuário.
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
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
					<UsefulLocationsMap
						locations={locations}
						icon="/assets/img/location-icon.png"
						onMapClick={onMapClick}
						handleDelete={handleDelete}
					/>
					<UsefulLocationsModal
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

export default LocaisUteisAdmin;
