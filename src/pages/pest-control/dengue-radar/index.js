import React, { useState, useEffect } from "react";
import PagesPieChart from "../../../charts/types/donut";
import Favorites from "../../../components/favorites";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import GrayLine from "../../../components/styled-components/gray-line";
import { ChartContainer } from "../../../charts/types/donut/chart";
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
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 93;
	const totalResolvidos = 22;
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
export default Dengue;
