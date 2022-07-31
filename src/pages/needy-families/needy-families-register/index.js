import React, { useState, useEffect } from "react";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
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
import ServiceOrderInformation from "../../../components/forms/ServiceOrderInformation";

const NeedyFamiliesRegister = (props) => {
	const totalSolicitados = 81;
	const totalResolvidos = 9;
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 37 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 37,
				name: "Registro de Familias Carentes",
				img: "/assets/img/home_familias_carentes.png",
				link: "/familias_carentes_registro",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 37,
				name: "Registro de Familias Carentes",
				img: "/assets/img/home_familias_carentes.png",
				link: "/familias_carentes_registro",
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
								Registro de Familias Carentes
							</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para informar familias carentes
							que precisam receber doações
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
					<ServiceOrderInformation descriptionHelperText="Conte-nos em detalhes sobre quais necessidades tal familía está passando." />
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default NeedyFamiliesRegister;
