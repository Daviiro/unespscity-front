import React, { useState, useEffect } from "react";
import PagesPieChart from "../../../charts/types/donut";
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
import Favorites from "../../../components/favorites";

const Terreno = (props) => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 5;
	const totalResolvidos = 6;
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 12 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 12,
				name: "Limpeza de Terreno",
				img: "/assets/img/home_vigilancia_sanitaria.png",
				link: "/limpeza_de_terreno",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 12,
				name: "Limpeza de Terreno",
				img: "/assets/img/home_vigilancia_sanitaria.png",
				link: "/limpeza_de_terreno",
			}); //se desfavoritou o servico
		}
		setIsFavorite(!isFavorite);
	};
	return (
		<ContainerBase>
			<Header />
			<Favorites data={props.data} />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_vigilancia_sanitaria.png"
						titulo="Vigilância Sanitária"
						linkItems={[
							{
								id: 1,
								name: "Limpeza de Piscinas",
								link: "/limpeza_de_piscinas",
							},
							{
								id: 2,
								name: "Limpeza de Terreno",
								link: "/limpeza_de_terreno",
							},
							{
								id: 3,
								name: "Restaurantes/Ambientes Irregulares",
								link: "/restaurantes",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Limpeza de Terreno
							</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para solicitar a limpeza de
							terrenos públicos pertencentes ao município ou para
							denunciar terrenos baldios particulares com
							irregularidades.
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
					<ServiceOrderInformation descriptionHelperText="Descreva com detalhes a situação que está o Terreno." />
				</MidContentContainer>
			</ContentContainer>
			<GrayLine />
			<ChartContainer>
				<h3> Limpezas solicitadas e efetuadas: </h3>
				<PagesPieChart
					solved={totalResolvidos}
					unsolved={totalSolicitados}
				/>
			</ChartContainer>
			<Footer />
		</ContainerBase>
	);
};
export default Terreno;
