import React, { useState, useEffect } from "react";
import { api } from "../../../services/api";
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

const Escorpiao = (props) => {
	const [totalNaoResolvidos, setTotalNaoResolvidos] = useState(0);
	const [totalResolvidos, setTotalResolvidos] = useState(0);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/foco_escorpiao');
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
			(favoriteX) => favoriteX.id === 14 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 14,
				name: "Foco de Escorpião",
				img: "/assets/img/home_foco_escorpiao.png",
				link: "/foco_de_escorpiao",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 14,
				name: "Foco de Escorpião",
				img: "/assets/img/home_foco_escorpiao.png",
				link: "/foco_de_escorpiao",
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
						source="/assets/img/home_controle_pragas.png"
						titulo="Controle de Pragas"
						linkItems={[
							{
								id: 1,
								name: "Foco de Escorpião",
								link: "/foco_de_escorpiao",
							},
							{
								id: 2,
								name: "Insetos Roedores e Caramujos",
								link: "/insetos_roedores_caramujos",
							},
							{
								id: 3,
								name: "Leishmaniose",
								link: "/leishmaniose",
							},
							{
								id: 4,
								name: "Radar da Dengue",
								link: "/radar_da_dengue",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Foco de Escorpião
							</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para informar a localização de
							focos de escorpiões e demais aracnídeos que fornecem
							perigo à população.
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
						srcaddress="/foco_escorpiao"
						descriptionHelperText="Descreva com detalhes o local onde foi encontrado o foco de escorpiões." 
					/>
				</MidContentContainer>
			</ContentContainer>
			<GrayLine />
			<ChartContainer>
				<h3> Eliminações solicitadas e efetuadas: </h3>
				<PagesPieChart
					solved={totalResolvidos}
					unsolved={totalNaoResolvidos}
				/>
			</ChartContainer>
			<Footer />
		</ContainerBase>
	);
};
export default Escorpiao;
