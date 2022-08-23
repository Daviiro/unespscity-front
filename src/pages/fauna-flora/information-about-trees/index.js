import { useState, useEffect, useContext } from "react";
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
import TreesMap from "./map";
import Footer from "../../../components/footer";
import TreesModal from "./modal";
import Favorites from "../../../components/favorites";
import LocalContext from "../../user-location/Context";
import { api } from "../../../services/api";
import { Context } from "../../../context/Auth/AuthContext";

const InformationAboutTrees = (props) => {
	const { user } = useContext(Context);
	const [isLoading, setLoading] = useState(true);
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 29 && setIsFavorite(true)
		);
	}, []);
	const [formValues, setFormValues] = useContext(LocalContext);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 29,
				name: "Árvores",
				img: "/assets/img/home_fauna_flora.png",
				link: "/arvores",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 29,
				name: "Árvores",
				img: "/assets/img/home_fauna_flora.png",
				link: "/arvores",
			}); //se desfavoritou o servico
		}
		setIsFavorite(!isFavorite);
	};

	const [locations, setLocations] = useState([
		{
			_id: 1,
			cityid: formValues.city,
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
			_id: 2,
			cityid: formValues.city,
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
			_id: 3,
			cityid: formValues.city,
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
			_id: 4,
			cityid: formValues.city,
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
			_id: 5,
			cityid: formValues.city,
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
	const handleAdd = (tree) => {
		//console.log(locations);
		//console.log(tree);
		setLocations([...locations, tree]); //adiciono a nova arvore no array
		//console.log(locations);
		setOpen(false);
		let uid = user.userId;
		if (uid === undefined) {
			uid = -1;
		}
		let age = tree.age;
		if (age <= 0 || age === undefined) {
			age = 1;
		}
		let specie = tree.specie;
		if (specie === "") {
			specie = "Não identificadda";
		}
		let name = tree.name;
		if (name === "") {
			name = "Não identificadda";
		}
		api.post("/informationabouttrees", {
			headers: {
				"Content-Type": "application/json; charset=UTF-8",
				Accept: "Token",
				"Access-Control-Allow-Origin": "*",
				Authorization: "*",
			},
			data: {
				cityid: tree.cityid,
				userid: uid,
				name: tree.name,
				imgsrc: tree.imgsrc,
				specie: specie,
				age: age,
				location: tree.location,
			},
		})
			.then((response) => console.log(response))
			.catch((e) => {
				console.log(e);
			});
	};

	const [clickedCoordinates, setClickedCoordinates] = useState({
		lat: 0,
		lng: 0,
	});

	const onMapClick = (coords) => {
		//console.log(open);
		setClickedCoordinates(coords);

		handleClickOpen();

		//console.log("ta aqui oh " + clickedCoordinates.lng);
		//console.log("ta aqui oh " + clickedCoordinates.lat);
	}; //ao clicar no mapa quero abrir um dialog para adicionar uma árvore

	const handleGet = async () => {
		const data = JSON.parse(localStorage.getItem("locationLocalStorage"));
		//console.log(formValues.city);
		try {
			await api
				.get("/informationabouttrees/cityid", {
					params: {
						cityid: data.city,
					},
				})
				.then((res) => {
					setLocations(res.data);

					console.log(res.data);
					setLoading(false);
				});
		} catch (err) {
			console.log(err);
		}
	};
	useEffect(() => {
		handleGet();
	}, []);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return (
		<ContainerBase>
			<Header />
			<Favorites data={props.data} />
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
							Neste serviço você pode cadastrar e checar a
							listagem de árvores no município.
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
					<TreesMap
						locations={locations}
						icon="/assets/img/tree-default-icon.png"
						onMapClick={onMapClick}
					/>
					<TreesModal
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

export default InformationAboutTrees;
