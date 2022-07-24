import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../../components/styled-components/PageStyles";
import Header from "../../../../components/header";
import MiniCard from "../../../../components/mini-card";
import AdminListCard from "../../../../components/card-list-admin";
import LeishmanioseMap from "./map";
import LeishmanioseModal from "./modal";
import Footer from "../../../../components/footer";

const AdminLeishmaniose = () => {

	const [clickedCoordinates, setClickedCoordinates] = useState({
		lat: 0,
		lng: 0,
	});

	const [locations, setLocations] = useState([
		{
			id: 1,
			name: "Clínica Veterinária São Francisco",
			imgsrc: "/assets/img/default-leishmaniose-vaccination.png",
			phone: "(18)3221-2021",
			opening_hours: "Aberto 24 horas",
			location: {
				lat: -22.1208387,
				lng: -51.3985141,
			},
		},
		{
			id: 2,
			name: "Hospital Veterinário São Manoel",
			imgsrc: "/assets/img/default-leishmaniose-vaccination.png",
			phone: "(18)3221-1096",
			opening_hours: "Aberto 24 horas",
			location: {
				lat: -22.1263661,
				lng: -51.3856148,
			},
		},
		{
			id: 3,
			name: "Terra Animal",
			imgsrc: "/assets/img/default-leishmaniose-vaccination.png",
			phone: "(18)3907-7697",
			opening_hours: "Aberto 24 horas",
			location: {
				lat: -22.1105905,
				lng: -51.4277387,
			},
		},
		{
			id: 4,
			name: "Garrido Clínica Veterinária",
			imgsrc: "/assets/img/default-leishmaniose-vaccination.png",
			phone: "(18)3928-4248",
			opening_hours: "Aberto 24 horas",
			location: {
				lat: -22.1416912,
				lng: -51.3931819,
			},
		},
		{
			id: 5,
			name: "Clinvet - Clínica Veterinária e Pet Shop",
			imgsrc: "/assets/img/default-leishmaniose-vaccination.png",
			phone: "(18)98119-5129",
			opening_hours: "Aberto 24 horas",
			location: {
				lat: -22.1033932,
				lng: -51.4333575,
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
			<Header />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_controle_pragas.png"
						titulo="Controle de Pragas"
						linkItems={[
							{
								id: 1,
								name: "Foco de Escorpião",
								link: "/admin/foco_de_escorpiao",
							},
							{
								id: 2,
								name: "Insetos Roedores e Caramujos",
								link: "/admin/insetos_roedores_caramujos",
							},
							{
								id: 3,
								name: "Leishmaniose",
								link: "/admin/leishmaniose",
							},
							{
								id: 4,
								name: "Radar da Dengue",
								link: "/admin/radar_da_dengue",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Leishmaniose
							</Typography>
						</div>
						<DescriptionText>
							Lista com todos os focos de leishmaniose que são relatados pelos usuarios.
						</DescriptionText>
					</div>
					<div></div>
				</TopContentContainer>
				<MidContentContainer>
					<AdminListCard
						source="/assets/img/home_fauna_flora.png"
						nome="Denúncia de Comércio Ilegal"
						sobrenome="[localização]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						report={true}
					/>
					<AdminListCard
						source="/assets/img/home_fauna_flora.png"
						nome="Ocorrência de animal silvestre preso/perdido/em cativeiro"
						sobrenome="[localização]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						report={true}
					/>
					<AdminListCard
						source="/assets/img/home_fauna_flora.png"
						nome="Ocorrência de animal silvestre causando perturbação pública"
						sobrenome="[localização]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						report={true}
					/>
					<AdminListCard
						source="/assets/img/home_fauna_flora.png"
						nome="Denúncia de Comércio Ilegal"
						sobrenome="[localização]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						report={true}
					/>
					<AdminListCard
						source="/assets/img/home_fauna_flora.png"
						nome="Ocorrência de animal silvestre preso/perdido/em cativeiro"
						sobrenome="[localização]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						report={true}
					/>
					<div style={{ textAlign: "center", marginTop: "11vh", marginBottom: "12vh" }}>
						<Typography variant = "h6"> Abaixo, você também editar os locais de vacinação contra a doença na cidade: </Typography>
					</div>
					<LeishmanioseMap
						locations={locations}
						icon="/assets/img/leishmaniose-vaccination-icon.png"
						onMapClick={onMapClick}
						handleDelete={handleDelete}
					/>
					<LeishmanioseModal
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
export default AdminLeishmaniose;
