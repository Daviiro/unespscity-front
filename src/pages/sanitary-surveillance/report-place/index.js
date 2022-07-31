import React, { useState, useEffect } from "react";
import PagesPieChart from "../../../charts/types/donut";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import GrayLine from "../../../components/styled-components/gray-line";
import { ChartContainer } from "../../../charts/types/donut/chart";
import Footer from "../../../components/footer";
import ServiceOrderInformation from "../../../components/forms/ServiceOrderInformation";
import Typography from "@mui/material/Typography";
import Favorites from "../../../components/favorites";
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

const Restaurante = (props) => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 25;
	const totalResolvidos = 9;
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 13 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 13,
				name: "Restaurantes / Ambientes Irregulares",
				img: "/assets/img/home_vigilancia_sanitaria.png",
				link: "/restaurantes",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 13,
				name: "Restaurantes / Ambientes Irregulares",
				img: "/assets/img/home_vigilancia_sanitaria.png",
				link: "/restaurantes",
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
								Restaurantes / Ambientes Irregulares
							</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para solicitar a vistoria em
							restaurantes e outros estabelecimentos que estejam
							descumprindo as normas da vigilância sanitária.
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
					<ServiceOrderInformation descriptionHelperText="Descreva com detalhes a situação que está o restaurante / ambiente." />
				</MidContentContainer>
			</ContentContainer>
			<GrayLine />
			<ChartContainer>
				<h3> Vistorias solicitadas e processadas/realizadas: </h3>
				<PagesPieChart
					solved={totalResolvidos}
					unsolved={totalSolicitados}
				/>
			</ChartContainer>
			<Footer />
		</ContainerBase>
	);
};
export default Restaurante;
