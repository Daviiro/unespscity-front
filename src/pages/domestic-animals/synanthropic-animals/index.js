import React, { useState, useEffect } from "react";
import Header from "../../../components/header";
import GrayLine from "../../../components/styled-components/gray-line";
import PagesPieChart from "../../../charts/types/donut";
import { ChartContainer } from "../../../charts/types/donut/chart";
import Footer from "../../../components/footer";
import {
	ContainerBase,
	ContentContainer,
	TopContentContainer,
	DescriptionText,
	MidContentContainer,
} from "../../../components/styled-components/PageStyles";
import MiniCard from "../../../components/mini-card";
import Typography from "@mui/material/Typography";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { StyledHr } from "../../../components/styled-components/StyledHr";
import Form from "../../../components/forms";
import ServiceOrderInformation from "../../../components/forms/ServiceOrderInformation";
import Favorites from "../../../components/favorites";

const AnimaisSinantropicos = (props) => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 5;
	const totalResolvidos = 3;
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 23 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 23,
				name: "Animais Sinantrópicos",
				img: "assets/img/home_animais_domesticos.png",
				link: "/animais-sinantropicos",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 23,
				name: "Animais Sinantrópicos",
				img: "assets/img/home_animais_domesticos.png",
				link: "/animais-sinantropicos",
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
						source="/assets/img/home_animais_domesticos.png"
						titulo="Animais Domésticos"
						linkItems={[
							{
								id: 1,
								name: "Animais Abandonados",
								link: "/animais_abandonados",
							},
							{
								id: 2,
								name: "Animais Perdidos",
								link: "/animais_perdidos_opcoes",
							},
							{
								id: 3,
								name: "Maus tratos à Animais",
								link: "/maus_tratos",
							},
							{
								id: 4,
								name: "Animais Sinantrópicos",
								link: "/animais-sinantropicos",
							},
							{
								id: 5,
								name: "Adoção de Animais",
								link: "/adocao_animais_opcoes",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Animais Sinantrópicos
							</Typography>
						</div>
						<DescriptionText>
							Aqui você poderá informar na aplicação a localização
							(georreferenciamento) de encontro dos animais, a
							data e hora do registro, podendo inserir uma
							descrição da situação atual, e fotos dos animais
							encontrados. Com esses dados será possível fazer uma
							solicitação para os gestores tomarem as medidas
							necessárias.
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
					<ServiceOrderInformation descriptionHelperText="Conte-nos em detalhes sobre os animais sinantrópicos e a situação em que os mesmos se encontram" />
				</MidContentContainer>
			</ContentContainer>
			<GrayLine />
			<ChartContainer>
				<h3> Problemas com Animais Sinantrópicos solicitados e resolvidos: </h3>
				<PagesPieChart
					solved={totalResolvidos}
					unsolved={totalSolicitados}
				/>
			</ChartContainer>
			<Footer />
		</ContainerBase>
	);
};

export default AnimaisSinantropicos;
