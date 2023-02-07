import React, { useState, useEffect } from "react";
import { api } from "../../../services/api";
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
import Favorites from "../../../components/favorites";
import SolidaryDisposal from "../../../components/forms/ServiceOrderInformation/solidaryDisposal";

const DescarteSolidario = (props) => {
	const [totalNaoResolvidos, setTotalNaoResolvidos] = useState(0);
	const [totalResolvidos, setTotalResolvidos] = useState(0);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/solidarydisposal');
				let totalSolicitados = data.length;
				setTotalResolvidos(data.filter((service) => service.isResolved === true).length);
				setTotalNaoResolvidos(totalSolicitados - totalResolvidos);
			}
			catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, []);	

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
				img: "/assets/img/home_descarte_solidario.png",
				link: "/descarte_solidario",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 35,
				name: "Descarte Solidário",
				img: "/assets/img/home_descarte_solidario.png",
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
					<SolidaryDisposal
						srcaddress="/solidarydisposal"
						descriptionHelperText="Por favor, informe-nos acima a natureza dos itens a serem descartados. Nos ajudará a acionar o órgão ideal."
					/>
				</MidContentContainer>
			</ContentContainer>
			<GrayLine />
			<ChartContainer>
				<h3> Descartes informados e descartes recolhidos: </h3>
				<PagesPieChart
					solved={totalResolvidos}
					unsolved={totalNaoResolvidos}
				/>
			</ChartContainer>
			<Footer />
		</ContainerBase>
	);
};
export default DescarteSolidario;
