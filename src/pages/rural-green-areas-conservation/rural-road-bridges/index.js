import React, { useState, useEffect } from "react";
import PagesPieChart from "../../../charts/types/donut";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import GrayLine from "../../../components/styled-components/gray-line";
import { ChartContainer } from "../../../charts/types/donut/chart";
import Footer from "../../../components/footer";
import ServiceOrderInformation from "../../../components/forms/ServiceOrderInformation";
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

const Pontes = (props) => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 97;
	const totalResolvidos = 12;
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 7 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 7,
				name: "Parques",
				img: "/assets/img/home_conservacao_rural.png",
				link: "/pontes_em_estradas_rurais",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 7,
				name: "Parques",
				img: "/assets/img/home_conservacao_rural.png",
				link: "/pontes_em_estradas_rurais",
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
						titulo="Conservação Rural"
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
								Pontes em Estradas Rurais
							</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para informar ocorrências em
							pontes rurais sob os limites do município, como
							problemas infraestruturais, obstruções (como acúmulo
							de terra ou invasão de vegetação), falha estrututal
							e/ou semelhantes.
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
					<ServiceOrderInformation descriptionHelperText="Descreva com detalhes a situação que está as pontes rurais." />
				</MidContentContainer>
			</ContentContainer>
			<GrayLine />
			<ChartContainer>
				<h3> Serviços solicitados e resolvidos: </h3>
				<PagesPieChart
					solved={totalResolvidos}
					unsolved={totalSolicitados}
				/>
			</ChartContainer>
			<Footer />
		</ContainerBase>
	);
};
export default Pontes;
