import React, { useState, useEffect } from "react";
// import { api } from "../../../services/api";
import PagesPieChart from "../../../charts/types/donut";
import Favorites from "../../../components/favorites";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import GrayLine from "../../../components/styled-components/gray-line";
import { ChartContainer } from "../../../charts/types/donut/chart";
import DengueMap from "./map";
import Footer from "../../../components/footer";
import ServiceOrderInformation from "../../../components/forms/ServiceOrderInformation";
import Typography from "@mui/material/Typography";
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

//id deste servico eh 17
const Dengue = (props) => {
/*	const [problems, setProblems] = useState([]);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/radar_dengue');
				setProblems(data);
			}
			catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, []);	*/

	const totalSolicitados = 5;
	const totalResolvidos = 3;
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 17 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 17,
				name: "Radar da Dengue",
				img: "/assets/img/home_controle_pragas.png",
				link: "/radar_da_dengue",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 17,
				name: "Radar da Dengue",
				img: "/assets/img/home_controle_pragas.png",
				link: "/radar_da_dengue",
			}); //se desfavoritou o servico
		}
		setIsFavorite(!isFavorite);
	};

	const [locations, setLocations] = useState([
		{
			id: 1,
			location: {
				lat: -22.1159641,
				lng: -51.4070265,
			},
		},
		{
			id: 2,
			location: {
				lat: -22.1214422,
				lng: -51.4075171,
			},
		},
		{
			id: 3,
			location: {
				lat: -22.1131517,
				lng: -51.4119613,
			},
		},
		{
			id: 4,
			location: {
				lat: -22.1052299,
				lng: -51.3998977,
			},
		},
		{
			id: 5,
			location: {
				lat: -22.0961994,
				lng: -51.4154257,
			},
		},
		{
			id: 6,
			location: {
				lat: -22.1234142,
				lng: -51.4268159,
			},
		},
		{
			id: 7,
			location: {
				lat: -22.1170895,
				lng: -51.4030536,
			},
		},
		{
			id: 8,
			location: {
				lat: -22.0978330,
				lng: -51.4065919,
			},
		},
		{
			id: 9,
			location: {
				lat: -22.1187192,
				lng: -51.4138216,
			},
		},
		{
			id: 10,
			location: {
				lat: -22.1234442,
				lng: -51.4036667,
			},
		},
		{
			id: 11,
			location: {
				lat: -22.1019012,
				lng: -51.4099006,
			},
		},
		{
			id: 12,
			location: {
				lat: -22.1076602,
				lng: -51.4217717,
			},
		},
		{
			id: 13,
			location: {
				lat: -22.1042070,
				lng: -51.4289610,
			},
		},
		{
			id: 14,
			location: {
				lat: -22.1085956,
				lng: -51.3981554,
			},
		},
		{
			id: 15,
			location: {
				lat: -22.1063268,
				lng: -51.3922527,
			},
		},
	]);

	return (
		<ContainerBase>
			<Header />
			<Favorites data={props.data} />
			<ContentContainer>
				<div
					style={{
						height: "15vh",
						width: "8vh",
						position: "fixed",
						top: "11vh",
						right: "12vh",
						zIndex: "1",
					}}
				>
					<a href="https://www.google.com.br/search?q=aedes+aegypti&hl=pt-BR&tbm=isch&source=hp&biw=1496&bih=723&ei=S7LaYqCJGIX51sQP8vySUA&iflsig=AJiK0e8AAAAAYtrAWyLEwFuLxa-ywYn8_F6v3YYf9McJ&oq=aedes+&gs_lcp=CgNpbWcQARgAMggIABCABBCxAzILCAAQgAQQsQMQgwEyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABFAAWIMtYJNjaABwAHgBgAGsE4gBwTySAQswLjEuMC4xLjktM5gBAKABAaoBC2d3cy13aXotaW1n&sclient=img">
						<MiniCard
							source="/assets/img/Radar_da_Dengue.png"
							titulo="Aedes aegypti"
						/>
					</a>
				</div>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_controle_pragas.png"
						titulo="Controle de Pragas"
						linkItems={[
							{
								id: 1,
								name: "Foco de Escorpião",
								link: "/foco_de_escorpiao",
							},
							{
								id: 2,
								name: "Insetos Roedores e Caramujos",
								link: "/insetos_roedores_caramujos",
							},
							{
								id: 3,
								name: "Leishmaniose",
								link: "/leishmaniose",
							},
							{
								id: 4,
								name: "Radar da Dengue",
								link: "/radar_da_dengue",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Radar da Dengue
							</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para informar a localização de
							focos do mosquito transmissor da Dengue, o
							pernilongo-rajado (Aedes aegypti).
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
					<ServiceOrderInformation descriptionHelperText="Descreva com detalhes o local onde foi encontrado o foco de Dengue." />
				</MidContentContainer>
				<div style={{ textAlign: "center", marginTop: "11vh", marginBottom: "12vh" }}>
					<Typography variant = "h6"> Abaixo, você também pode conferir os focos de dengue já registrados na sua cidade: </Typography>
				</div>
				<DengueMap
					locations = {locations}
					icon = "/assets/img/dengue-icon.png"
				/>
			</ContentContainer>
			<GrayLine />
			<ChartContainer>
				<h3> Eliminações solicitadas e efetuadas: </h3>
			{/*	{
					problems.map((problem) => (problem.type === "dengue-radar") (
						<PagesPieChart
							solved={problem.totalResolvidos}
							unsolved={problem.totalSolicitados}
						/>
					))
				}	*/}
				<PagesPieChart
					solved={totalResolvidos}
					unsolved={totalSolicitados}
				/>
			</ChartContainer>
			<Footer />
		</ContainerBase>
	);
};
export default Dengue;