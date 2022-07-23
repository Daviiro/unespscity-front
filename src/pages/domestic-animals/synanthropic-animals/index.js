import React, { useState } from "react";
import Header from "../../../components/header";
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

const AnimaisSinantropicos = () => {
	const [isFavorite, setIsFavorite] = useState(false);

	const handleFavorite = () => {
		setIsFavorite(!isFavorite);
		console.log("você favoritou este serviço");
	};

	return (
		<ContainerBase>
			<Header />
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
								link: "/adocao_animais",
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
			<Footer />
		</ContainerBase>
	);
};

export default AnimaisSinantropicos;
