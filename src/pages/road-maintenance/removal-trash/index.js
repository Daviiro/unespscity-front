import React, { useState, useEffect } from "react";
import { api } from "../../../services/api";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import GrayLine from "../../../components/styled-components/gray-line";
import { ChartContainer } from "../../../charts/types/donut/chart";
import Footer from "../../../components/footer";
import PagesPieChart from "../../../charts/types/donut";
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

const Lixos_Solidos = (props) => {
	const [totalNaoResolvidos, setTotalNaoResolvidos] = useState(0);
	const [totalResolvidos, setTotalResolvidos] = useState(0);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/removetrash');
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
			(favoriteX) => favoriteX.id === 10 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 10,
				name: "Resíduos Sólidos",
				img: "/assets/img/home_remocao_detritos.png",
				link: "/residuos_solidos",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 10,
				name: "Resíduos Sólidos",
				img: "/assets/img/home_remocao_detritos.png",
				link: "/residuos_solidos",
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
						source="/assets/img/home_remocao_detritos.png"
						titulo="Remoção de Detritos"
						linkItems={[
							{
								id: 1,
								name: "Animais Mortos",
								link: "/animais_mortos",
							},
							{
								id: 2,
								name: "Resíduos Sólidos",
								link: "/residuos_solidos",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Resíduos Sólidos
							</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para solicitar a remoção de
							resíduos sólidos, como galhos, sofás, etc.
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
						srcaddress="/removetrash"
						descriptionHelperText="Descreva com detalhes o local onde está todo o resíduo sólido."
					/>
				</MidContentContainer>
			</ContentContainer>

			<GrayLine />
			<ChartContainer>
				<h3> Remoções solicitadas e efetuadas: </h3>
				<PagesPieChart
					solved={totalResolvidos}
					unsolved={totalNaoResolvidos}
				/>
			</ChartContainer>
			<Footer />
		</ContainerBase>
	);
};
export default Lixos_Solidos;
