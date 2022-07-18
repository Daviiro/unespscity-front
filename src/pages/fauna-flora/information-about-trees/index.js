import { useState } from "react";
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
import TreesMap from "./trees-map";
import Footer from "../../../components/footer";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";
import TreesModal from "./trees-modal";
import Stack from "@mui/material/Stack";

const InformationAboutTrees = () => {
	const [isFavorite, setIsFavorite] = useState(false);
	const handleFavorite = () => {
		setIsFavorite(!isFavorite);
		console.log("você favoritou este serviço");
	};
	const [latitude, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
	const [specie, setSpecie] = useState("");

	const handleLatitudeChange = (event) => {
		setLatitude(event.target.value);
	};
	const handleLongitudeChange = (event) => {
		setLongitude(event.target.value);
	};
	const handleSpecieChange = (event) => {
		setSpecie(event.target.value);
	};

	const [locations, setLocations] = useState([
		{
			name: "Location 1",
			imgsrc: "/assets/img/default-tree.png",
			specie: "Pata de Vaca",
			age: 50,
			location: {
				lat: 41.3954,
				lng: 2.162,
			},
		},
		{
			name: "Location 2",
			imgsrc: "/assets/img/default-tree.png",
			specie: "Sibipiruna",
			age: 50,
			location: {
				lat: 41.3917,
				lng: 2.1649,
			},
		},
		{
			name: "Location 3",
			imgsrc: "/assets/img/default-tree.png",
			specie: "Manacá da Serra",
			age: 50,
			location: {
				lat: 41.3773,
				lng: 2.1585,
			},
		},
		{
			name: "Location 4",
			imgsrc: "/assets/img/default-tree.png",
			specie: "Quaresmeira ",
			age: 50,
			location: {
				lat: 41.3797,
				lng: 2.1682,
			},
		},
		{
			name: "Location 5",
			imgsrc: "/assets/img/default-tree.png",
			specie: "Sibipiruna ",
			age: 50,
			location: {
				lat: -22.131951,
				lng: -51.40933,
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
	const onMapClick = () => {
		console.log(open);
		handleClickOpen();
	}; //ao clicar no mapa quero abrir um dialog para adicionar uma árvore

	return (
		<ContainerBase>
			<Header />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_fauna_flora.png"
						titulo="Fauna e Flora"
						linkItems={[
							{
								id: 1,
								name: "Fiscalização de Animais Silvestres",
								link: "/animais_silvestres",
							},
							{
								id: 2,
								name: "Maus tratos à Animais",
								link: "/maus_tratos",
							},
							{
								id: 3,
								name: "Árvores",
								link: "/arvores",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">Árvores</Typography>
						</div>
						<DescriptionText>
							Neste serviço você cadastrar, remover ou checar a
							listagem de árvores no município (remoção quando a
							árvore é cortada, ou arrancada e colocada em outro
							lugar). As informações podem ser bem reduzidas pois
							árvores são simples e existem em grande número. A
							única informação de alta importância que se deve ter
							é a espécie dela.
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
					<form>
						<Stack spacing={2} direction="row">
							<TextField
								fullWidth
								id="outlined-basic"
								label="Latitude"
								type="number"
								variant="outlined"
								value={latitude}
								onChange={handleLatitudeChange}
							/>
							<TextField
								fullWidth
								id="outlined-basic"
								label="Longitude"
								variant="outlined"
								value={longitude}
								onChange={handleLongitudeChange}
							/>
							<TextField
								fullWidth
								id="outlined-basic"
								label="Espécie"
								variant="outlined"
								value={specie}
								onChange={handleSpecieChange}
							/>
						</Stack>
						<Button fullWidth variant="contained">
							Adicionar
						</Button>
					</form>
					<TreesMap
						locations={locations}
						icon="/assets/img/tree-default-icon.png"
						onMapClick={onMapClick}
					/>
					<TreesModal
						locations={locations}
						open={open}
						handleClose={handleClose}
					/>
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default InformationAboutTrees;
