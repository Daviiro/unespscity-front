import React, { useState } from "react";
import PagesPieChart from "../../../charts/types/donut";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import ServiceOrderInformation from "../../../components/forms/ServiceOrderInformation";
import GrayLine from "../../../components/styled-components/gray-line";
import { ChartContainer } from "../../../charts/types/donut/chart";
import LeishmanioseMap from "./map";
import Footer from "../../../components/footer";

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

const Leishmaniose = () => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 92;
	const totalResolvidos = 14;
	const [isFavorite, setIsFavorite] = useState(false);
	const handleFavorite = () => {
		setIsFavorite(!isFavorite);
		console.log("você favoritou este serviço");
	};

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

	return (
		<ContainerBase>
			<Header />
			<ContentContainer>
				<div style = {{
					height: "15vh", 
					width: "8vh", 
					position: "fixed", 
					top: "11vh", 
					right: "12vh", 
					zIndex: "1",
				}}> 
					<a href = "https://www.google.com.br/search?q=phlebotomus+papatasi&tbm=isch&ved=2ahUKEwi9jobj2Iz5AhVVBbkGHUJkBEoQ2-cCegQIABAA&oq=Phlebotomus+pappatasi&gs_lcp=CgNpbWcQARgAMgQIABAeMgYIABAKEBg6BwgAELEDEEM6BQgAEIAEULIvWLIvYLpCaABwAHgAgAH_AogB7wOSAQcwLjEuMC4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=YbLaYv3ZI9WK5OUPwsiR0AQ&bih=723&biw=1496&hl=pt-BR">
						<MiniCard
							source="/assets/img/Leishmaniose.png"
							titulo="Mosquito Palha"
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
							<Typography variant="h4">Leishmaniose</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para informar a localização de
							focos do mosquito transmissor da Leishmaniose, o
							mosquito-palha (Phlebotomus pappatasi).
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
					<ServiceOrderInformation descriptionHelperText="Descreva com detalhes o local onde foi encontrado o foco de Leishmaniose." />
				</MidContentContainer>
				<div style={{ textAlign: "center", marginTop: "11vh", marginBottom: "12vh" }}>
					<Typography variant = "h6"> Abaixo, você também pode conferir onde vacinar o seu animal na cidade: </Typography>
				</div>
				<LeishmanioseMap
					locations = {locations}
					icon = "/assets/img/leishmaniose-vaccination-icon.png"
				/>
			</ContentContainer>
			<GrayLine />
			<ChartContainer>
				<h3> Eliminações solicitadas e efetuadas: </h3>
				<PagesPieChart
					solved={totalResolvidos}
					unsolved={totalSolicitados}
				/>
			</ChartContainer>
			<Footer />
		</ContainerBase>
	);
};
export default Leishmaniose;
