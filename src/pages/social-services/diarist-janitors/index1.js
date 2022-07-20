import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
	FormContainer,
    InputAddressContainer,
} from "./styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import Input from "../../../components/input";
import InputLocalization from "../../../components/input-localization-button";
import DescriptionInput from "../../../components/description-input";
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

const DiaristasNovo = () => {
	const [isFavorite, setIsFavorite] = useState(false);
	const handleFavorite = () => {
		setIsFavorite(!isFavorite);
		console.log("você favoritou este serviço");
	};

	return (
		<ContainerBase>
			<Header />
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
					<FormContainer>
                        <InputAddressContainer>
				            <Input title = "Nome:" width = "30vw" />
				            <Input title = "Telefone:" width = "13vw" />
			            </InputAddressContainer>
						<InputLocalization />
						<p style = {{ marginTop: "2.5vh" }}> OU </p>
						<InputAddressContainer>
				            <Input title = "Endereço:" width = "36vw" />
				            <Input title = "Nº" width = "7vw" />
			            </InputAddressContainer>
						<Input
				            title = "Ponto de Referência:"
				            placeholder = "Um local de referência proximo (Opcional)"
			            />
						<DescriptionInput
							title = "Descrição do serviço:"
							placeholder = "conte-nos em detalhes o seu serviço prestado, horários disponíveis, cálculo de pagamento e o que mais julgar importante."
						/>
						<Button text = "Enviar" />
					</FormContainer>
				</MidContentContainer>
			</ContentContainer>
			<GrayLine />
			<Footer />
		</ContainerBase>
	);
};
export default DiaristasNovo;