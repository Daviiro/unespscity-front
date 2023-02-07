import React, { useState, useEffect } from "react";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import ListCard from "../../../components/card-list";
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
import { api } from "../../../services/api";

const HomelessPeople = (props) => {
	const [isFavorite, setIsFavorite] = useState(false);
	const [problems, setProblems] = useState([]);
	const [refresh, setRefresh] = useState(0);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 36 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 36,
				name: "Moradores de Rua",
				img: "/assets/img/home_moradores_rua.png",
				link: "/moradores_rua",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 36,
				name: "Moradores de Rua",
				img: "/assets/img/home_moradores_rua.png",
				link: "/moradores_rua",
			}); //se desfavoritou o servico
		}
		setIsFavorite(!isFavorite);
	};
	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get("/homelesspeople");
				setProblems(data);
			} catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, [refresh]);

	return (
		<ContainerBase>
			<Header />
			<Favorites data={props.data} />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_familias_carentes.png"
						titulo="Familias Carentes"
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
								Moradores de Rua
							</Typography>
						</div>
						<DescriptionText>
							Aqui você ver pessoas em situação de rua e caso
							tenha condições, ajuda las doando alimentos, roupas,
							cobertores, etc.
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
					{problems.map((problem) => (
						<ListCard
							source={problem.images}
							nome={problem.name}
							sobrenome={problem.cpf + ", " + problem.rg}
							descricao={problem.description}
							id={problem._id}
						/>
					))}
				</MidContentContainer>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};

export default HomelessPeople;
