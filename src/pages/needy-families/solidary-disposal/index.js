import React, { useState, useEffect } from "react";
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
import ServiceOrderInformation from "../../../components/forms/ServiceOrderInformation";
import Favorites from "../../../components/favorites";

const DescarteSolidario = (props) => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 19;
	const totalResolvidos = 13;
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 35 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 35,
				name: "Descarte Solidário",
				img: "/assets/img/home_familias_carentes.png",
				link: "/descarte_solidario",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 35,
				name: "Descarte Solidário",
				img: "/assets/img/home_familias_carentes.png",
				link: "/descarte_solidario",
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
							Utilize este serviço para realizar o descarte
							solidário de roupas/calçados, eletrodométicos,
							móveis ou similares. O órgão adequado será informado
							automaticamente para fazer o recolhimento no tempo
							hábil mais rápido possível.
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
					<div style={{ marginTop: "-4.5vh", marginBottom: "0.4vh" }}>
						<input type="checkbox" id="Roupas/Calçados" />
						<label
							for="Roupas/Calçados"
							style={{ fontSize: "15px", color: "gray" }}
						>
							{" "}
							Roupas/Calçados{" "}
						</label>
					</div>
					<div style={{ marginBottom: "0.4vh" }}>
						<input type="checkbox" id="Eletrodomésticos" />
						<label
							for="Eletrodomésticos"
							style={{ fontSize: "15px", color: "gray" }}
						>
							{" "}
							Eletrodomésticos{" "}
						</label>
					</div>
					<div style={{ marginBottom: "0.4vh" }}>
						<input type="checkbox" id="Móveis" />
						<label
							for="Móveis"
							style={{ fontSize: "15px", color: "gray" }}
						>
							{" "}
							Móveis{" "}
						</label>
					</div>
					<div style={{ marginBottom: "4vh" }}>
						<input type="checkbox" id="outros" />
						<label
							for="outros"
							style={{ fontSize: "15px", color: "gray" }}
						>
							{" "}
							outros{" "}
						</label>
					</div>
					<ServiceOrderInformation descriptionHelperText="Por favor, informe-nos acima a natureza dos itens a serem descartados. Nos ajudará a acionar o órgão ideal." />
					{/*<Form />*/}
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
