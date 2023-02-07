import React, { useState, useEffect } from "react";
import { api } from "../../../services/api";
import PagesPieChart from "../../../charts/types/donut";
import { Details } from "./styles";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import GrayLine from "../../../components/styled-components/gray-line";
import { ChartContainer } from "../../../charts/types/donut/chart";
import Footer from "../../../components/footer";
import ServiceOrderInformation from "../../../components/forms/ServiceOrderInformation";
import Typography from "@mui/material/Typography";
import Favorites from "../../../components/favorites";
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
const Piscinas = (props) => {
	const [totalNaoResolvidos, setTotalNaoResolvidos] = useState(0);
	const [totalResolvidos, setTotalResolvidos] = useState(0);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/limpeza_piscinas');
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
			(favoriteX) => favoriteX.id === 11 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 11,
				name: "Limpeza de Piscinas",
				img: "/assets/img/home_piscinas.png",
				link: "/limpeza_de_piscinas",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 11,
				name: "Limpeza de Piscinas",
				img: "/assets/img/home_piscinas.png",
				link: "/limpeza_de_piscinas",
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
						source="/assets/img/home_vigilancia_sanitaria.png"
						titulo="Vigilância Sanitária"
						linkItems={[
							{
								id: 1,
								name: "Limpeza de Piscinas",
								link: "/limpeza_de_piscinas",
							},
							{
								id: 2,
								name: "Limpeza de Terreno",
								link: "/limpeza_de_terreno",
							},
							{
								id: 3,
								name: "Restaurantes/Ambientes Irregulares",
								link: "/restaurantes",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Limpeza de Piscinas
							</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para solicitar a
							limpeza/manutenção de piscinas públicas do
							município. Você também pode checar links externos de
							como realizar a limpeza/manutenção em piscinas
							particulares.
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
						srcaddress="/limpeza_piscinas"
						descriptionHelperText="Descreva com detalhes a situação que está a piscina" 
					/>
					<Details>
						<p> Como limpar piscinas particulares: </p>
						<a
							target="_blank"
							href="https://diario-de-casa.shoptime.com.br/como-limpar-a-piscina/?epar=bp_nb_nb_go_sch_saz_blogs&utm_medium=buscappc&utm_source=google&utm_campaign=marca:shop%3Bmidia:buscappc%3Bformato:nobranding%3Bsubformato:nobranding%3Bidcampanha:sch_saz_blogs&gclid=EAIaIQobChMI2d6X8dTr9wIVzUFIAB2jQA6HEAAYASAAEgJyTfD_BwE"
						>
							{" "}
							⇒ Link Externo 1{" "}
						</a>
						<a
							target="_blank"
							href="https://www.poolpiscina.com/como-limpar-piscina-manual-passo-passo-para-iniciantes/"
						>
							{" "}
							⇒ Link Externo 2{" "}
						</a>
						<a
							target="_blank"
							href="https://www.cleanipedia.com/br/area-externa/como-limpar-piscina.html"
						>
							{" "}
							⇒ Link Externo 3{" "}
						</a>
					</Details>
				</MidContentContainer>
			</ContentContainer>
			<GrayLine />
			<ChartContainer>
				<h3> Limpezas solicitadas e efetuadas: </h3>
				<PagesPieChart
					solved={totalResolvidos}
					unsolved={totalNaoResolvidos}
				/>
			</ChartContainer>
			<Footer />
		</ContainerBase>
	);
};
export default Piscinas;
