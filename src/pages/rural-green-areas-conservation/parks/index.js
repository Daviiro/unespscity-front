import React, { useState, useEffect } from "react";
// import { api } from "../../../services/api";
import PagesPieChart from "../../../charts/types/donut";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import GrayLine from "../../../components/styled-components/gray-line";
import { ChartContainer } from "../../../charts/types/donut/chart";
import Footer from "../../../components/footer";
import ServiceOrderInformation from "../../../components/forms/ServiceOrderInformation";
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

const Parques = (props) => {
/*	const [totalNaoResolvidos, setTotalNaoResolvidos] = useState(0);
	const [totalResolvidos, setTotalResolvidos] = useState(0);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/parks');
				let totalSolicitados = data.length;
				setTotalResolvidos(data.filter((service) => service.isResolved === true).length);
				setTotalNaoResolvidos(totalSolicitados - totalResolvidos);
			}
			catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, []);	*/	

	const totalNaoResolvidos = 1;
	const totalResolvidos = 3;
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 6 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 6,
				name: "Parques",
				img: "/assets/img/home_conservacao_rural.png",
				link: "/parques",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 6,
				name: "Parques",
				img: "/assets/img/home_conservacao_rural.png",
				link: "/parques",
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
						source="/assets/img/home_conservacao_rural.png"
						titulo="Áreas Verdes"
						linkItems={[
							{
								id: 1,
								name: "Parques",
								link: "/parques",
							},
							{
								id: 2,
								name: "Pontes em estradas rurais",
								link: "/pontes_em_estradas_rurais",
							},
							{
								id: 3,
								name: "Praças",
								link: "/pracas",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Parques
							</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para informar ocorrências em
							parques públicos da cidade, como solicitação de
							limpeza, informar ocupação indevida, queimadas e
							demais irregularidades e/ou sugestões.
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
					<ServiceOrderInformation descriptionHelperText="Descreva com detalhes a situação que está o parque. " />
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
export default Parques;
