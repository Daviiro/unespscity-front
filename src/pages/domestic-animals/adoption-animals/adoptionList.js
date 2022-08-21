import React, { useState, useEffect } from "react";
import { api } from "../../../services/api";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import ListCard from "../../../components/card-list";
import GrayLine from "../../../components/styled-components/gray-line";
import PagesPieChart from "../../../charts/types/donut";
import { ChartContainer } from "../../../charts/types/donut/chart";
import Footer from "../../../components/footer";
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

const AdoptionAnimals = (props) => {
/*	const [problems, setProblems] = useState([]);	*/
	const [totalNaoResolvidos, setTotalNaoResolvidos] = useState(0);
	const [totalResolvidos, setTotalResolvidos] = useState(0);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/adocao_animais');
				/*setProblems(data);*/
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
			(favoriteX) => favoriteX.id === 18 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 18,
				name: "Doação de Animais",
				img: "assets/img/home_animais_domesticos.png",
				link: "/adocao_animais_doacao",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 18,
				name: "Doação de Animais",
				img: "assets/img/home_animais_domesticos.png",
				link: "/adocao_animais_doacao",
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
								Adoção de Animais
							</Typography>
						</div>
						<DescriptionText>
							Aqui você pode checar a lista de animais disponíveis
							para a adoção.
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
				{/*	{
						problems.map((problem) => (
							<ListCard
								source={problem.images}
								nome={problem.owner}
								sobrenome={problem.date}
								descricao={problem.description}
								button="Falar com o dono"
							/>
						))
					}	*/}
					<ListCard
						source="/assets/backup/01.jpg"
						nome="Marcos Cardoso da Silva"
						sobrenome="28/02/2022"
						descricao="Estou doando este cachorro."
						button="Falar com o dono"
					/>
					<ListCard
						source="/assets/backup/02.jpg"
						nome="Giovanna Marques"
						sobrenome="28/02/2022"
						descricao="Estou doando este gato."
						button="Falar com o dono"
					/>
					<ListCard
						source="/assets/backup/03.jpg"
						nome="José Espinati"
						sobrenome="02/04/2022"
						descricao="Estou doando esta cadela."
						button="Falar com o dono"
					/>
					<ListCard
						source="/assets/backup/04.jpg"
						nome="Andressa Valéria"
						sobrenome="18/04/2022"
						descricao="Estou doando esta gata."
						button="Falar com o dono"
					/>
					<ListCard
						source="/assets/backup/05.jpg"
						nome="Juan Marques Jr."
						sobrenome="20/05/2022"
						descricao="Estou doando este pato."
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
					unsolved={totalNaoResolvidos}
				/>
			</ChartContainer>
			<Footer />
		</ContainerBase>
	);
};

export default AdoptionAnimals;
