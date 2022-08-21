import React, { useState, useEffect } from "react";
import { api } from "../../../services/api";
import PagesPieChart from "../../../charts/types/donut";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import ServiceOrderInformation from "../../../components/forms/ServiceOrderInformation";
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

const Iluminacao = (props) => {
	const [totalNaoResolvidos, setTotalNaoResolvidos] = useState(0);
	const [totalResolvidos, setTotalResolvidos] = useState(0);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/get_all_street_lighting');
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
			(favoriteX) => favoriteX.id === 2 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 2,
				name: "Iluminação Pública",
				img: "/assets/img/home_conservacao_urbana.png",
				link: "/iluminacao_publica",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 2,
				name: "Iluminação Pública",
				img: "/assets/img/home_conservacao_urbana.png",
				link: "/iluminacao_publica",
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
						source="/assets/img/home_conservacao_urbana.png"
						titulo="Conservação Urbana"
						linkItems={[
							{
								id: 1,
								name: "Fiscalização de Instalações",
								link: "/fiscalizacao_de_instalacoes",
							},
							{
								id: 2,
								name: "Iluminação Pública",
								link: "/iluminacao_publica",
							},
							{
								id: 3,
								name: "Monumentos e Chafarizes",
								link: "/monumentos_e_chafarizes",
							},
							{
								id: 4,
								name: "Pavimentação",
								link: "/pavimentacao",
							},
							{
								id: 5,
								name: "Vias Públicas",
								link: "/vias_publicas",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Iluminação Pública
							</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para informar ocorrências com a
							iluminação de áreas públicas da cidade, como postes
							e outras fontes de luz queimadas, danificadas,
							oscilando e/ou irregulares.
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
					<ServiceOrderInformation 
						srcaddress="/create_street_lighting"
						descriptionHelperText="Descreva com detalhes a situação que está a lampada (totalmente queimada, piscando, com a luz fraca, etc)." 
					/>
				</MidContentContainer>
			</ContentContainer>
			<GrayLine />
			<ChartContainer>
				<h3> Serviços solicitados e resolvidos: </h3>
				<PagesPieChart
					solved={totalResolvidos}
					unsolved={totalNaoResolvidos}
				/>
			</ChartContainer>
			<Footer />
		</ContainerBase>
	);
};
export default Iluminacao;
