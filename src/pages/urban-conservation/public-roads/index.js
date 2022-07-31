import React, { useState, useEffect } from "react";
import PagesPieChart from "../../../charts/types/donut";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import GrayLine from "../../../components/styled-components/gray-line";
import { ChartContainer } from "../../../charts/types/donut/chart";
import Footer from "../../../components/footer";
import Typography from "@mui/material/Typography";
import ServiceOrderInformation from "../../../components/forms/ServiceOrderInformation";
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

const Vias = (props) => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 78;
	const totalResolvidos = 58;
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 5 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 5,
				name: "Vias Públicas",
				img: "/assets/img/home_conservacao_urbana.png",
				link: "/vias_publicas/vias_publicas",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 5,
				name: "Vias Públicas",
				img: "/assets/img/home_conservacao_urbana.png",
				link: "/vias_publicas/vias_publicas",
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
							<Typography variant="h4">Vias Públicas</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para informar ocorrências com
							as vias públicas da cidade, como obstrução,
							problemas infraestruturais, solicitação de limpeza,
							ocupação indevida e/ou outras irregularidades.
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
					<ServiceOrderInformation descriptionHelperText="Descreva com detalhes a situação que está as vias publicas." />
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
export default Vias;
