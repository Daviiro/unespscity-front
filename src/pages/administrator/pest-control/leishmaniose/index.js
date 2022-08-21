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
import AdminListCardAlt from "../../../../components/card-list-admin/alternative";
import LeishmanioseMap from "./map";
import LeishmanioseModal from "./modal";
import Footer from "../../../../components/footer";

const AdminLeishmaniose = () => {
		const [problems, setProblems] = useState([]);
		const [refresh, setRefresh] = useState(0);

		useEffect(() => {
			async function getProblems() {
				try {
					const { data } = await api.get('/leishmaniose');
					setProblems(data);
				}
				catch (e) {
					console.log(e);
				}
			}
			getProblems();
		}, [refresh]);	

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
			"quero deletar o local: " + Location.name
		);
	};

	return (
		<ContainerBase>
			<AdminHeader />
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
					{
						problems.map((problem) => (
							<AdminListCard
								key={problem._id}
								source={problem.images}
								nome={problem.street}
								sobrenome={problem.referencePoint}
								descricao={problem.description}
								report={true}
								userId={problem.idUser}
								url="leishmaniose"
								id={problem._id}
								setRefresh={setRefresh}
							/>
						))
					}
					{/* <AdminListCardAlt
						source="/assets/backup/01.jpg"
						titulo="Animal 1" 
						nome="Rua Ulysses Ramos de Castro, 88, Bairro do Bosque"
						sobrenome="Perto do Consultório Dr. Ayres."
						descricao="Meu cachorro pegou Leishmaniose."
					/>
					<AdminListCardAlt
						source="/assets/backup/03.jpg"
						titulo="Animal 2" 
						nome="Rua Vinte de Novembro, 890, Vila Jesus."
						sobrenome="Perto da Auto Mecânica 4.0."
						descricao="Minha cadela pegou Leishmaniose."
					/>
					<AdminListCardAlt
						source="/assets/backup/06.jpeg"
						titulo="Animal 3" 
						nome="Rua Winston Churchil, 9000, Jardim Paulistano"
						sobrenome="Perto da Clínica Pádua."
						descricao="Meu cachorro pegou Leishmaniose."
					/>
					<AdminListCardAlt
						source="/assets/backup/08.jpeg"
						titulo="Animal 4" 
						nome="Rua Yujiro Takikuchi, 910, Parque Nova Alvorada"
						sobrenome="Perto do Gerson Lanches."
						descricao="Minha cadela pegou Leishmaniose."
					/>
					<AdminListCardAlt
						source="/assets/backup/13.jpg"
						titulo="Animal 5" 
						nome="Rua Zacarias Miguel, 9020, Vila Marina"
						sobrenome="Perto do Capotas Jem."
						descricao="Meu cachorro pegou Leishmaniose."
					/> */}
					<div style={{ textAlign: "center", marginTop: "11vh", marginBottom: "12vh" }}>
						<Typography variant="h6"> Abaixo, você também editar os locais de vacinação contra a doença na cidade: </Typography>
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
