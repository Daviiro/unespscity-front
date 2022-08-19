import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PagesPieChart from "../../../charts/types/donut";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import GrayLine from "../../../components/styled-components/gray-line";
import { ChartContainer } from "../../../charts/types/donut/chart";
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
import ServiceOrderInformation from "./ServiceOrderInformation";
import Favorites from "../../../components/favorites";

const AnimaisPerdidosNovo = (props) => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 5;
	const totalResolvidos = 1;
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 21 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 21,
				name: "Animais Perdidos",
				img: "assets/img/home_animais_domesticos.png",
				link: "/animais_perdidos_novo",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 21,
				name: "Animais Perdidos",
				img: "assets/img/home_animais_domesticos.png",
				link: "/animais_perdidos_novo",
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
								Animais Perdidos
							</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para cadastrar um novo animal
							perdido na lista. Para checar a lista completa,
							clique
							<Link
								to="/animais_perdidos_lista"
								style={{ textDecoration: "none" }}
							>
								{" "}
								AQUI
							</Link>
							.
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
					<ServiceOrderInformation descriptionHelperText="conte-nos acima a raça, aparência, nome e tudo o que puder facilitar a identificação do seu animal." />
				</MidContentContainer>
			</ContentContainer>
			<GrayLine />
			<ChartContainer>
				<h3>
					{" "}
					Buscas por animais solicitadas e buscas bem-sucedidas:{" "}
				</h3>
				<PagesPieChart
					solved={totalResolvidos}
					unsolved={totalSolicitados}
				/>
			</ChartContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AnimaisPerdidosNovo;
