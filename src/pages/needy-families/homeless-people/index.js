import React, { useState, useEffect } from "react";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import ListCard from "../../../components/card-list";
import Footer from "../../../components/footer";
import Favorites from "../../../components/favorites";
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

const HomelessPeople = (props) => {
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 36 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 36,
				name: "Moradores de Rua",
				img: "/assets/img/home_familias_carentes.png",
				link: "/moradores_rua",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 36,
				name: "Moradores de Rua",
				img: "/assets/img/home_familias_carentes.png",
				link: "/moradores_rua",
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
						source="/assets/img/home_familias_carentes.png"
						titulo="Familias Carentes"
						linkItems={[
							{
								id: 1,
								name: "Registro de Familias Carentes",
								link: "/familia_carente_opcoes",
							},
							{
								id: 2,
								name: "Moradores de Rua",
								link: "/moradores_rua",
							},
							{
								id: 3,
								name: "Descarte Solidário",
								link: "/descarte_solidario",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Moradores de Rua
							</Typography>
						</div>
						<DescriptionText>
							Aqui você ver pessoas em situação de rua e caso
							tenha condições, ajuda las doando alimentos, roupas,
							cobertores, etc.
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
					<ListCard
						source="/assets/img/home_animais_domesticos.png"
						nome="[última vez visto]"
						sobrenome="[último local visto]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						button="Falar com o dono"
					/>
					<ListCard
						source="/assets/img/home_animais_domesticos.png"
						nome="[última vez visto]"
						sobrenome="[último local visto]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						button="Falar com o dono"
					/>
					<ListCard
						source="/assets/img/home_animais_domesticos.png"
						nome="[última vez visto]"
						sobrenome="[último local visto]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						button="Falar com o dono"
					/>
					<ListCard
						source="/assets/img/home_animais_domesticos.png"
						nome="[última vez visto]"
						sobrenome="[último local visto]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						button="Falar com o dono"
					/>
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default HomelessPeople;
