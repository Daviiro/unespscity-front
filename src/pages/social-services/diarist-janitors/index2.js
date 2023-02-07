import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Favorites from "../../../components/favorites";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Button from "../../../components/styled-components/form-button";
import GrayLine from "../../../components/styled-components/gray-line";
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
import { api } from "../../../services/api";
import ListCard from "../../../components/card-list";

const DiaristasLista = (props) => {
	const [gestores, setGestores] = useState([]);
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 84;
	const totalResolvidos = 78;
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 40 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 40,
				name: "Cadastro de Diaristas",
				img: "/assets/img/home_cadastro_diaristas.png",
				link: "/diaristas_opcoes",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 40,
				name: "Cadastro de Diaristas",
				img: "/assets/img/home_cadastro_diaristas.png",
				link: "/diaristas_opcoes",
			}); //se desfavoritou o servico
		}
		setIsFavorite(!isFavorite);
	};

	const [problems, setProblems] = useState([]);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get("/diaristjanitor");
				setProblems(data);
			} catch (e) {
				console.log(e);
			}
		}
		getProblems();
	}, []);

	return (
		<ContainerBase>
			<Header />
			<Favorites data={props.data} />
			<ContentContainer>
				<TopContentContainer>
					<MiniCard
						source="/assets/img/home_servicos_sociais.png"
						titulo="Serviços Sociais"
						linkItems={[
							{
								id: 1,
								name: "Feiras Livres",
								link: "/feiras_livres",
							},
							{
								id: 2,
								name: "Cadastro de Diaristas",
								link: "/diaristas_opcoes",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Cadastro de Diaristas
							</Typography>
						</div>
						<DescriptionText>
							Aqui você pode checar a lista de diaristas,
							faxineiros(as) e zeladores(as) em seu município.
							Para cadastrar um(a) novo(a), clique{" "}
							<Link
								to="/diaristas_novo"
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
					<Link
						to="/localizacao"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Button text="Ver localizações no mapa" />
					</Link>
					{/*<ListCard
						source="/assets/img/home_servicos_sociais.png"
						nome="[Nome e número]"
						sobrenome="[localização]"
						descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet ipsum dolor. Vivamus imperdiet semper odio sed consequat. Praesent cursus dui a porta blandit. Aliquam erat volutpat. Morbi quis ex sapien. Aliquam efficitur lorem mattis, vehicula justo sed, porta mi. Nulla at pulvinar ligula, eu dapibus felis. Cras vel orci eu dolor hendrerit dictum aliquet sed orci. Aliquam ultricies dignissim diam ut ornare."
						button="Entrar em contato"
					/>
					*/}

					{problems.length != 0 ? (
						problems.map((problem) => (
							<ListCard
								source=""
								nome={
									problem.street +
									", Contato: " +
									problem.phoneNumber
								}
								sobrenome={problem.referencePoint}
								descricao={problem.description}
							/>
						))
					) : (
						<div>Sem dados no banco de dados</div>
					)}
				</MidContentContainer>
			</ContentContainer>
			<GrayLine />
			<Footer />
		</ContainerBase>
	);
};
export default DiaristasLista;
