import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import PagesPieChart from "../../../charts/types/donut";
import Favorites from "../../../components/favorites";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import GrayLine from "../../../components/styled-components/gray-line";
import ListCard from "../../../components/card-list";
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

const AnimaisPerdidosLista = (props) => {
	const [gestores, setGestores] = useState([]);
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 5;
	const totalResolvidos = 1;
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 22 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 22,
				name: "Animais Perdidos",
				img: "assets/img/home_animais_domesticos.png",
				link: "/animais_perdidos_lista",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 22,
				name: "Animais Perdidos",
				img: "assets/img/home_animais_domesticos.png",
				link: "/animais_perdidos_lista",
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
						source="/assets/img/home_animais_domesticos.png"
						titulo="Animais Domésticos"
						linkItems={[
							{
								id: 1,
								name: "Animais Abandonados",
								link: "/animais_abandonados",
							},
							{
								id: 2,
								name: "Animais Perdidos",
								link: "/animais_perdidos_opcoes",
							},
							{
								id: 3,
								name: "Maus tratos à Animais",
								link: "/maus_tratos",
							},
							{
								id: 4,
								name: "Animais Sinantrópicos",
								link: "/animais-sinantropicos",
							},
							{
								id: 5,
								name: "Adoção de Animais",
								link: "/adocao_animais_opcoes",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Animais Perdidos
							</Typography>
						</div>
						<DescriptionText>
							Aqui você pode checar a lista de animais perdidos do
							seu município. Para cadastrar uma nova ocorrência,
							clique{" "}
							<Link
								to="/animais_perdidos_novo"
								style={{ textDecoration: "none" }}
							>
								AQUI
							</Link>
							.
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
					<ListCard
						source="/assets/backup/11.jpg"
						nome="Rua Antônio Pereira Teles, 68, Parque Shiraiwa"
						sobrenome="Perto do Bar Mercearia Fim de Tarde."
						descricao="Perdi meu cachorro. Ele atende pelo nome de Max. Visto pela última vez dia 17 de outubro de 2022."
						button="Falar com o dono"
					/>
					<ListCard
						source="/assets/backup/12.jpg"
						nome="Rua Bruna Krasucki, 690, Parque Central"
						sobrenome="Perto da Pizzaria do Haroldo."
						descricao="Perdi meu gato. Ele atende pelo nome de Spot. Visto pela última vez 22 de fevereiro de 2022."
						button="Falar com o dono"
					/>
					<ListCard
						source="/assets/backup/13.jpg"
						nome="Rua César Audi, 7000, Jardim Jequitiba"
						sobrenome="Perto da Quadra Municipal."
						descricao="Perdi minha cadela. Ela atende pelo nome de Jeh. Vista pela última vez anteontem."
						button="Falar com o dono"
					/>
					<ListCard
						source="/assets/backup/14.jpg"
						nome="Rua dos Abacateiros, 701, Jardim São Gabriel"
						sobrenome="Perto da Restaurante e Marmitex Naiara."
						descricao="Perdi minha gata. Ela atende pelo nome de Fifi. Vista pela última vez domingo passado."
						button="Falar com o dono"
					/>
					<ListCard
						source="/assets/backup/15.jpg"
						nome="Rua Ernesto Brogiatto, 7002, Jardim Balneario"
						sobrenome="Perto do Supermercado Transfiguração."
						descricao="Perdi meu jabuti. Ele tem uma rachadura na casca. Visto pela última vez na virada do mês."
						button="Falar com o dono"
					/>
				</MidContentContainer>
			</ContentContainer>
			<GrayLine />
			<ChartContainer>
				<h3>
					{" "}
					Buscas por animais solicitadas e buscas bem-sucedidas:{" "}
				</h3>
				<PagesPieChart
					solved={totalResolvidos}
					unsolved={totalSolicitados}
				/>
			</ChartContainer>
			<Footer />
		</ContainerBase>
	);
};
export default AnimaisPerdidosLista;
