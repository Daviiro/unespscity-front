import React, { useState } from "react";
import { Link } from "react-router-dom";
import PagesPieChart from "../../../charts/types/donut";

import {
	Details,
	InputLocalization,
	InputAddressContainer,
	ChartContainer,
} from "./styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Input from "../../../components/input";
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

const DescarteSolidario = () => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 19;
	const totalResolvidos = 13;
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
						source="/assets/img/home_familias_carentes.png"
						titulo="Famílias Carentes"
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
								Descarte Solidário
							</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para realizar o descarte solidário
                            de roupas/calçados, eletrodométicos, móveis ou similares.
                            O órgão adequado será informado automaticamente para 
                            fazer o recolhimento no tempo hábil mais rápido possível.
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
						<Link
							to="/localizacao"
							target="_blank"
							rel="noopener noreferrer"
						>
							<InputLocalization>
								{" "}
								Usar Localização Atual{" "}
							</InputLocalization>
						</Link>
						<p style = {{ marginBottom: "-5.5vh" }}> OU </p>
						<InputAddressContainer>
							<Input title="Endereço:" width="36vw" />
							<Input title="Nº" width="7vw" />
						</InputAddressContainer>
						<Input
							title="Ponto de Referência:"
							placeholder="Opcional"
						/>
						<div>
							<input type="checkbox" id="Roupas/Calçados" />
							<label for="Roupas/Calçados" style={{ fontSize: "14px" }}>
								{" "}
								Roupas/Calçados{" "}
							</label>
						</div>
						<div>
							<input type="checkbox" id="Eletrodomésticos" />
							<label for="Eletrodomésticos" style={{ fontSize: "14px" }}>
								{" "}
								Eletrodomésticos{" "}
							</label>
						</div>
						<div>
							<input type="checkbox" id="Móveis" />
							<label for="Móveis" style={{ fontSize: "14px" }}>
								{" "}
								Móveis{" "}
							</label>
						</div>
                        <div>
							<input type="checkbox" id="outros" />
							<label for="outros" style={{ fontSize: "14px" }}>
								{" "}
								outros{" "}
							</label>
						</div>
						<DescriptionInput placeholder="Por favor, informe-nos a natureza dos itens a serem descartados. Nos ajudará a acionar o órgão ideal." />
						<InputPhotos />
						<Button text="Enviar" />
					</Details>
				</MidContentContainer>
			</ContentContainer>
			<GrayLine />
			<ChartContainer>
				<h3> Descartes informados e descartes recolhidos: </h3>
				<PagesPieChart
					solved={totalResolvidos}
					unsolved={totalSolicitados}
				/>
			</ChartContainer>
			<Footer />
		</ContainerBase>
	);
};
export default DescarteSolidario;
