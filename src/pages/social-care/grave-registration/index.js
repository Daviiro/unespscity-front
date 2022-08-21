import React, { useState, useEffect } from "react";
import { api } from "../../../services/api";
import { FormContainer, InputAddressContainer, GrayLine2 } from "./styles";
import Favorites from "../../../components/favorites";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Button from "../../../components/styled-components/form-button";
import InputQR from "./input-qr";
import Input from "../../../components/input";
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

const Tumulos = (props) => {
	let total = useState(0);

	useEffect(() => {
		async function getProblems() {
			try {
				const { data } = await api.get('/tumulos');
				total = data.length;
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
			(favoriteX) => favoriteX.id === 31 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 31,
				name: "Cadastro de Túmulos e Falecidos",
				img: "/assets/img/home_assistencia_social.png",
				link: "/tumulos",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 31,
				name: "Cadastro de Túmulos e Falecidos",
				img: "/assets/img/home_assistencia_social.png",
				link: "/tumulos",
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
						source="/assets/img/home_assistencia_social.png"
						titulo="Assistência Social"
						linkItems={[
							{
								id: 1,
								name: "Locais Úteis",
								link: "/locais_uteis",
							},
							{
								id: 2,
								name: "Telefones Úteis",
								link: "/telefones_uteis",
							},
							{
								id: 3,
								name: "Programação Cultural",
								link: "/programacao_cultural",
							},
							{
								id: 4,
								name: "Cadastro de Túmulos e Falecidos",
								link: "/tumulos",
							},
						]}
					/>
					<div style={{ marginTop: "14px" }}>
						<div style={{ textAlign: "center" }}>
							<Typography variant="h4">
								Cadastro de Túmulos e Falecidos
							</Typography>
						</div>
						<DescriptionText>
							Utilize este serviço para adicionar uma nota de
							falecimento e a localização do túmulo do recém
							falecido.
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
					<FormContainer>
						<InputAddressContainer style={{ marginTop: "10vh" }}>
							<Input title="Nome do Falecido:" width="33.25vw" />
							<input
								type="date"
								title="Data de Falecimento"
								id="input"
							/>
						</InputAddressContainer>
						<InputAddressContainer>
							<Input title="Cemitério:" width="33.25vw" />
							<Input title="Nº do túmulo:" width="10vw" />
						</InputAddressContainer>
						<GrayLine2
							style={{ marginTop: "7vh", marginBottom: "0vh" }}
						/>
						<h4> Inserir código QR (opcional): </h4>
						<Input placeholder="inserir código" width="44.5vw" />
						<p> ou enviar como imagem: </p>
						<InputQR />
						<GrayLine2
							style={{ marginTop: "4.5vh", marginBottom: "7vh" }}
						/>
						<Button text="Enviar" />
					</FormContainer>
				</MidContentContainer>
				<GrayLine />
				<div>
					<h3> Total de túmulos registrados no sistema: {total}</h3>
				</div>
			</ContentContainer>
			<Footer />
		</ContainerBase>
	);
};
export default Tumulos;
