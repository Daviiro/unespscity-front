import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FormContainer, InputAddressContainer } from "./styles";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Input from "../../../components/input";
import InputLocalization from "../../../components/input-localization-button";
import DescriptionInput from "../../../components/description-input";
import Button from "../../../components/styled-components/form-button";
import GrayLine from "../../../components/styled-components/gray-line";
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
import ServiceOrderInformation from "../../../components/forms/ServiceOrderInformation";

const DiaristasNovo = (props) => {
	const [isFavorite, setIsFavorite] = useState(false);
	useEffect(() => {
		props.data.find(
			(favoriteX) => favoriteX.id === 39 && setIsFavorite(true)
		);
	}, []);
	const handleFavorite = () => {
		if (!isFavorite) {
			props.handleAddFavorite({
				id: 39,
				name: "Cadastro de Diaristas",
				img: "/assets/img/home_servicos_sociais.png",
				link: "/diaristas_novo",
			}); //se favoritou o servico
		} else {
			props.handleSubFavorite({
				id: 39,
				name: "Cadastro de Diaristas",
				img: "/assets/img/home_servicos_sociais.png",
				link: "/diaristas_novo",
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
							Utilize este serviço para cadastrar um(a) novo(a)
							diarista, faxineiro(a) ou zelador(a) na sua cidade.
							Para ver a lista com todos os cadastros, clique
							<Link
								to="/diaristas_lista"
								style={{ textDecoration: "none" }}
							>
								{" "}
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
					<ServiceOrderInformation
						phoneOption={true}
						srcaddress="/diaristjanitor"
						descriptionHelperText="Conte-nos em detalhes o seu serviço prestado, horários disponíveis, cálculo de pagamento e o que mais julgar importante."
					/>
				</MidContentContainer>
			</ContentContainer>
			<GrayLine />
			<Footer />
		</ContainerBase>
	);
};
export default DiaristasNovo;
