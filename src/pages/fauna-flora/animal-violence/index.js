import React, { useState } from "react";
import PagesPieChart from "../../../charts/types/donut";
import { InputAddressContainer, Details, ChartContainer } from "./styles";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Input from "../../../components/input";
import InputLocalization from "../../../components/input-localization-button";
import DescriptionInput from "../../../components/description-input";
import InputPhotos from "../../../components/images-input";
import Button from "../../../components/styled-components/form-button";
import GrayLine from "../../../components/styled-components/gray-line";
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

const MausTratosAnimais = () => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 25;
	const totalResolvidos = 4;
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
						source="/assets/img/home_fauna_flora.png"
						titulo="Fauna e Flora"
						linkItems={[
							{
								id: 1,
								name: "Fiscalização de Animais Silvestres",
								link: "/animais_silvestres",
							},
							{
								id: 2,
								name: "Maus tratos à Animais",
								link: "/maus_tratos",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Maus tratos à Animais
							</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para denunciar a prática de
							maus tratos à animais silvestres ou domésticos.
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
					<Details>
						<InputLocalization />
						<p>OU</p>
						<InputAddressContainer>
							<Input title="Endereço:" width="36vw" />
							<Input title="Nº" width="7vw" />
						</InputAddressContainer>
						<Input
							title="Ponto de Referência:"
							placeholder="Opcional"
						/>
						<div>
							<input
								type="checkbox"
								id="Maus tratos à Animais Silvestres"
							/>
							<label
								for="Maus tratos à Animais Silvestres"
								style={{ fontSize: "14px" }}
							>
								{" "}
								Maus tratos à Animais Silvestres{" "}
							</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="Maus tratos à Animais Domésticos"
							/>
							<label
								for="Maus tratos à Animais Domésticos"
								style={{ fontSize: "14px" }}
							>
								{" "}
								Maus tratos à Animais Domésticos{" "}
							</label>
						</div>
						<DescriptionInput placeholder="Conte-nos em detalhes sobre o problema encontrado, descrevendo o animal também, se possível. Nos ajudará a acionar o serviço ideal para resolver o problema." />
						<InputPhotos />
						<Button text="Enviar" />
					</Details>
				</MidContentContainer>
			</ContentContainer>
			<GrayLine />
			<ChartContainer>
				<h3> Serviços solicitados e serviços efetuados: </h3>
				<PagesPieChart
					solved={totalResolvidos}
					unsolved={totalSolicitados}
				/>
			</ChartContainer>
			<Footer />
		</ContainerBase>
	);
};

export default MausTratosAnimais;
