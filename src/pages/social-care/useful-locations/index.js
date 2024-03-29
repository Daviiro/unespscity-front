import { useState, useEffect } from "react";
import Header from "../../../components/header";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../components/styled-components/PageStyles";
import MiniCard from "../../../components/mini-card";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import Typography from "@mui/material/Typography";
import { StyledHr } from "../../../components/styled-components/StyledHr";
import UsefulLocationsMap from "./map";
import Footer from "../../../components/footer";
import UsefulLocationsModal from "./modal";
import Favorites from "../../../components/favorites";

const LocaisUteis = (props) => {
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 32 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 32,
				name: "Locais Úteis",
				img: "/assets/img/home_conservacao_urbana.png",
				link: "/locais_uteis",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 32,
				name: "Locais Úteis",
				img: "/assets/img/home_conservacao_urbana.png",
				link: "/locais_uteis",
			}); //se desfavoritou o servico
		}
		setIsFavorite(!isFavorite);
	};

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
	const handleAdd = (Location) => {
		setLocations([...locations, Location]); //adiciono a nova localização no array
		setOpen(false);
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
			<Favorites data={props.data} />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_assistencia_social.png"
						titulo="Assistência Social"
						linkItems={[
							{
								id: 1,
								name: "Locais Úteis",
								link: "/locais_uteis",
							},
							{
								id: 2,
								name: "Telefones Úteis",
								link: "/telefones_uteis",
							},
							{
								id: 3,
								name: "Programação Cultural",
								link: "/programacao_cultural",
							},
							{
								id: 4,
								name: "Cadastro de Túmulos e Falecidos",
								link: "/tumulos",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">Locais Úteis</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para cadastrar locais úteis
							para os habitantes e visitantes do seu município,
							como escolas, farmácias, restaurantes, centros de
							lazer, quadras, prestação de serviços e muito mais.
						</DescriptionText>
					</div>
					{isFavorite ? (
						<span>
							<AiFillStar
								style={{
									cursor: "pointer",
									margin: ".8rem",
									stroke: "black",
									strokeWidth: "5",
								}}
								color={"yellow"}
								size={25}
								onClick={() => handleFavorite()}
							/>
						</span>
					) : (
						<AiOutlineStar
							style={{
								cursor: "pointer",
								margin: ".8rem",
								stroke: "black",
								strokeWidth: "5",
							}}
							size={25}
							onClick={() => handleFavorite()}
						/>
					)}
					<StyledHr />
				</TopContentContainer>
				<MidContentContainer>
					<UsefulLocationsMap
						locations={locations}
						icon="/assets/img/location-icon.png"
						onMapClick={onMapClick}
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

export default LocaisUteis;
