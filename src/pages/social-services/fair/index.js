import React, { useState, useEffect } from "react";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import ListCard from "../../../components/card-list";
import Footer from "../../../components/footer";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../components/styled-components/PageStyles";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { StyledHr } from "../../../components/styled-components/StyledHr";
import { Typography } from "@mui/material";
import FairsMap from "./map";
import Favorites from "../../../components/favorites";
import axios from "axios";

const Feiras = (props) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 41 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 41,
				name: "Feiras Livres",
				img: "/assets/img/home_servicos_sociais.png",
				link: "/feiras_livres",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 41,
				name: "Feiras Livres",
				img: "/assets/img/home_servicos_sociais.png",
				link: "/feiras_livres",
			}); //se desfavoritou o servico
		}
		setIsFavorite(!isFavorite);
	};
	const [locations, setLocations] = useState([
		{
			id: 1,
			name: "Feira 1",
			imgsrc: "/assets/img/fair-icon.png",
			operating_days: {
				dom: true,
				seg: false,
				ter: false,
				qua: false,
				qui: false,
				sex: false,
				sab: true,
			},

			openingHour: new Date(),
			closingHour: new Date(),
			location: {
				lat: -22.131951,
				lng: -51.40933,
			},
		},
		{
			id: 2,
			name: "Feira 2",
			imgsrc: "/assets/img/fair-icon.png",
			operating_days: {
				dom: true,
				seg: false,
				ter: false,
				qua: false,
				qui: false,
				sex: false,
				sab: true,
			},
			operating_time: {
				open: 7,
				close: 12,
			},
			location: {
				lat: -22.131951,
				lng: -51.40933,
			},
		},
	]);

	const handleGet = async () => {
		const data = JSON.parse(localStorage.getItem("locationLocalStorage"));
		//console.log(formValues.city);
		console.log(process.env.REACT_APP_GOOGLEMAPSAPIKEY);
		try {
			await axios
				.get(
					`http://localhost:${process.env.REACT_APP_PORT_NUMBER}/api/fair/cityid`,
					{
						params: {
							cityid: data.city,
						},
					}
				)
				.then((res) => {
					setLocations(res.data);
					console.log("fdkhfalkha");
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
						source="/assets/img/home_servicos_sociais.png"
						titulo="Serviços Sociais"
						linkItems={[
							{
								id: 1,
								name: "Feiras Livres",
								link: "/feiras_livres",
							},
							{
								id: 2,
								name: "Cadastro de Diaristas",
								link: "/diaristas_opcoes",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">Feiras Livres</Typography>
						</div>
						<DescriptionText>
							Consulte a listagem das feiras livres da cidade com
							suas respectivas localizações, dias e horários!
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
					{/*<ListCard
						source="/assets/img/home_servicos_sociais.png"
						nome="Rua - Bairro"
						sobrenome="Dia - Horario"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						/>*/}
					<FairsMap
						locations={locations}
						icon="/assets/img/fair-icon.png"
					/>
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default Feiras;
