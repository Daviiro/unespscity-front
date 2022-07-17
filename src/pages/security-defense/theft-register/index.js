import React, { useState } from "react";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Footer from "../../../components/footer";
import Typography from "@mui/material/Typography";
import ServiceOrderInformation from "../../../components/forms/ServiceOrderInformation";
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

const TheftRegister = () => {
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
						source="/assets/img/home_seguranca_defesa_civil.png"
						titulo="Segurança e Defesa Civil"
						linkItems={[
							{
								id: 1,
								name: "Registro de Acidentes",
								link: "/registro_roubos",
							},
							{
								id: 2,
								name: "Registro de Roubos e Furtos",
								link: "/registro-acidentes",
							},
							{
								id: 3,
								name: "Vítimas de violência doméstica",
								link: "/violencia-domestica",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Registro de Roubos e Furtos
							</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para informar ocorrências de
							roubos e furtos que aconteceram, assim a policia
							será informada também.
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
					<ServiceOrderInformation descriptionHelperText="Descreva com detalhes o local onde você foi furtado e o que você perdeu." />
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default TheftRegister;
