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
import AdminListCardAlt from "../../../../components/card-list-admin/alternative";
import UsefulLocationsMap from "./map";
import Footer from "../../../../components/footer";

const LocaisUteisAdmin = () => {
/*	const [problems, setProblems] = useState([]);

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
	}, [problems]);	*/

	const [clickedCoordinates, setClickedCoordinates] = useState({
		lat: 0,
		lng: 0,
	});

	const [locations, setLocations] = useState([
		{
			id: 1,
			name: "Prefeitura Municipal de Presidente Prudente",
			imgsrc: "/assets/img/default-location.png",
			phone: "(18)3902-4400",
			opening_hours: "Segunda à Sexta, das 08:00 às 17:00",
			location: {
				lat: -22.1218172,
				lng: -51.3881661,
			},
		},
		{
			id: 2,
			name: "Hospital Regional (HR)",
			imgsrc: "/assets/img/default-location.png",
			phone: "(18)3229-1500",
			opening_hours: "Aberto 24 horas",
			location: {
				lat: -22.1323390,
				lng: -51.4073447,
			},
		},
		{
			id: 3,
			name: "Prudenshopping",
			imgsrc: "/assets/img/default-location.png",
			phone: "(18)2101-9700",
			opening_hours: "Todos os dias das 10:00 às 22:00",
			location: {
				lat: -22.1158252,
				lng: -51.4071100,
			},
		},
		{
			id: 4,
			name: "Centro",
			imgsrc: "/assets/img/default-location.png",
			phone: "(telefones variados)",
			opening_hours: "Segunda a sábado, das 07:00 as 19:00",
			location: {
				lat: -22.1241906,
				lng: -51.3858354,
			},
		},
		{
			id: 5,
			name: "Câmara Municipal de Presidente Prudente",
			imgsrc: "/assets/img/default-location.png",
			phone: "(18)2104-4300",
			opening_hours: "Segunda à Sexta, das 08:00 às 17:00",
			location: {
				lat: -22.1204230,
				lng: -51.3870140,
			},
		},
		{
			id: 6,
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
			id: 7,
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
			id: 8,
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
			id: 9,
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
			id: 10,
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
			id: 11,
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
				{/*	{
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
					}	*/}
					<AdminListCardAlt
						source="/assets/backup/40.jpg"
						titulo="Local 1" 
						nome="Prefeitura Municipal de Presidente Prudente - Paço Municipal"
						sobrenome="Avenida Coronel José Soares Marcondes, 1200, Centro"
						descricao="Em frente à Caixa Econômica Federal, atravessando a avenida."
					/>
					<AdminListCardAlt
						source="/assets/backup/41.jpg"
						titulo="Local 2" 
						nome="Hospital Regional (HR) de Presidente Prudente"
						sobrenome="Rua José Bongiovani, 1279, Jardim Colina"
						descricao="Em frente ao Pastelão."
					/>
					<AdminListCardAlt
						source="/assets/backup/42.jpg"
						titulo="Local 3" 
						nome="Prudenshopping"
						sobrenome="Avenida Manoel Goulart, 2400, Jardim das Rosas"
						descricao="Ao lado do hipermercado Carrefour."
					/>
					<AdminListCardAlt
						source="/assets/backup/43.jpg"
						titulo="Local 4" 
						nome="Centro"
						sobrenome="Rua Major Felício Tarabay, Centro"
						descricao="Perto do Consultório Dr. Ayres."
					/>
					<AdminListCardAlt
						source="/assets/backup/44.jpg"
						titulo="Local 5" 
						nome="Câmara Municipal de Presidente Prudente"
						sobrenome="Avenida Washington Luiz, 544, Centro"
						descricao="Ao lado da Acessoria Digital Online."
					/>
					<AdminListCardAlt
						source="/assets/backup/45.jpg"
						titulo="Local 6" 
						nome="Cidade da Criança"
						sobrenome="Rodovia Raposo Tavares, S/N - Jardim Satélite"
						descricao="cesso pela SOESP Advanced (filial Sementes Oeste Paulista)."
					/>
					<AdminListCardAlt
						source="/assets/backup/46.jpeg"
						titulo="Local 7" 
						nome="Parque do Povo"
						sobrenome="Avenida Quatorze de Setembro, Vila Formosa"
						descricao="Ao lado da SEMEPP (Secretaria Municipal de Esportes)."
					/>
					<AdminListCardAlt
						source="/assets/backup/47.jpg"
						titulo="Local 8" 
						nome="Centro Histórico Cultural Matarazzo"
						sobrenome="Rua Quintino Bocaiúva, 749, Vila Marcondes"
						descricao="Em frente à agência de Correios Quintino Bocaiúva."
					/>
					<AdminListCardAlt
						source="/assets/backup/48.jpeg"
						titulo="Local 9" 
						nome="Balneário da Amizade"
						sobrenome="Avenida João Gomes, Uep3-S.2"
						descricao="Próximo à loja Suculentas e cactos amizade."
					/>
					<AdminListCardAlt
						source="/assets/backup/49.jpg"
						titulo="Local 10" 
						nome="Museu e Arquivo Histórico Municipal"
						sobrenome="Rua Doutor João Gonçalvez Foz, 2179, Jardim das Rosas"
						descricao="Em frente ao posto AMG."
					/>
					<AdminListCardAlt
						source="/assets/backup/50.jpg"
						titulo="Local 11" 
						nome="Catedral de São Sebastião"
						sobrenome="Avenida Coronel José Soares Marcondes, 1200, Centro"
						descricao="Ao lado da praça 9 de Julho."
					/>
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
