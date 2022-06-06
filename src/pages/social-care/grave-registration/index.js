import React from "react";

import {
	ContainerBase,
	SubHeader,
	ContainerColumn,
	Square,
	FormContainer,
	InputAddressContainer,
	GrayLine2,
} from "./styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import { StyledHr } from "../../../components/styled-components/StyledHr";
import ServiceDescription from "../../../components/service-description";
import Button from "../../../components/styled-components/form-button";
import DescriptionInput from "../../../components/description-input";
import InputQR from "./input-qr";
import Input from "../../../components/input";
import GrayLine from "../../../components/styled-components/gray-line";
import Footer from "../../../components/footer";

const Tumulos = () => {
	// posteriormente passar o número de túmulos registrados por parâmetro //
	const total = 36;
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_assistencia_social.png"
						titulo="Assistência Social"
						linkItems={[
							{
								id: 1,
								name: "Telefones Úteis",
								link: "/telefones_uteis",
							},
							{
								id: 2,
								name: "Cadastro de Túmulos e Falecidos",
								link: "/tumulos",
							},
						]}
					/>
					<ContainerColumn>
						<h1> Cadastro de Túmulos e Falecidos </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Utilize este serviço para adicionar uma nota de falecimento e a localização do túmulo do recém falecido." />
					<FormContainer>
						<InputAddressContainer style = {{ marginTop: "10vh" }}>
							<Input title = "Nome do Falecido:" width = "33.25vw" />
							<input type = "date" title = "Data de Falecimento" id = "input" />
						</InputAddressContainer>
						<InputAddressContainer>
							<Input title = "Cemitério:" width = "33.25vw" />
							<Input title = "Nº do túmulo:" width = "10vw" />
						</InputAddressContainer>
						<GrayLine2 style = {{ marginTop: "7vh", marginBottom: "0vh" }} />
							<h4> Inserir código QR (opcional): </h4>
							<Input placeholder = "inserir código" width = "44.5vw" />
							<p> ou enviar como imagem: </p>
							<InputQR />
						<GrayLine2 style = {{ marginTop: "4.5vh", marginBottom: "7vh" }}  />
						<Button text = "Enviar" />
					</FormContainer>
				</Square>
				<GrayLine />
				<h3> Total de túmulos registrados no sistema: </h3>
                <span> {total} </span>
				<Footer />
			</ContainerBase>
		</>
	);
};
export default Tumulos;