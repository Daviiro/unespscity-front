import React, { useState, useEffect } from "react";
import PagesPieChart from "../../../charts/types/donut";
import {
	SubHeader,
	ContainerColumn,
	ServiceDescription,
	GrayLine2,
	InputAddressContainer,
	Square,
	Details,
} from "./styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Favorites from "../../../components/favorites";
import GrayLine from "../../../components/styled-components/gray-line";
import ServiceOrderInformation from "../../../components/forms/ServiceOrderInformation";
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

const AnimaisSilvestres = (props) => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 23;
	const totalResolvidos = 14;
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 30 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 30,
				name: "Fiscalização de Animais Silvestres",
				img: "/assets/img/home_fauna_flora.png",
				link: "/animais_silvestres",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 30,
				name: "Fiscalização de Animais Silvestres",
				img: "/assets/img/home_fauna_flora.png",
				link: "/animais_silvestres",
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
							{
								id: 3,
								name: "Árvores",
								link: "/arvores",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Fiscalização de Animais Silvestres
							</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para denunciar o comércio
							ilegal de animais silvestres, informar a localização
							de um deles perdido/preso/em cativeiro, ou ainda
							informar um deles causando perturbação pública.
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
					{/**
						 * <Details>
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
								id="Comércio Ilegal de animais silvestres"
							/>
							<label
								for="Comércio Ilegal de animais silvestres"
								style={{ fontSize: "14px" }}
							>
								{" "}
								Comércio Ilegal de animais selvagens{" "}
							</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="Animal Silvestre perdido, preso ou em cativeiro"
							/>
							<label
								for="Animal Silvestre perdido, preso ou em cativeiro"
								style={{ fontSize: "14px" }}
							>
								{" "}
								Animal Selvagem perdido, preso ou em cativeiro{" "}
							</label>
						</div>
						<div>
							<input
								type="checkbox"
								id="Animal silvestre causando perturbação pública"
							/>
							<label
								for="Animal silvestre causando perturbação pública"
								style={{ fontSize: "14px" }}
							>
								{" "}
								Animal selvagem causando perturbação pública{" "}
							</label>
						</div>
						<DescriptionInput placeholder="Conte-nos em detalhes sobre o problema encontrado, descrevendo o animal também, se possível. Nos ajudará a acionar o serviço ideal para resolver o problema." />
						<InputPhotos />
						<Button text="Enviar" />
					</Details>
						 */}
					<ServiceOrderInformation descriptionHelperText="Conte-nos em detalhes sobre o problema encontrado (case se trata de um animal selvagem/silvestre causando perturbação pública, animal silvestre preso em cativeiro ou comércio ilegal de animais), descrevendo o animal também, se possível. Nos ajudará a acionar o serviço ideal para resolver o problema." />
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

export default AnimaisSilvestres;
