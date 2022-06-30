import React from "react";
import { Link } from "react-router-dom";
import PagesPieChart from "../../../charts/types/donut";

import {
	ContainerBase,
	SubHeader,
	ContainerColumn,
	FormContainer,
	InputLocalization,
	Square,
	ChartContainer,
} from "./styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import { StyledHr } from "../../../components/styled-components/StyledHr";
import ServiceDescription from "../../../components/service-description";
import Input from "../../../components/input";
import DescriptionInput from "../../../components/description-input";
import InputPhotos from "../../../components/images-input";
import Button from "../../../components/styled-components/form-button";
import GrayLine from "../../../components/styled-components/gray-line";
import Footer from "../../../components/footer";

const AnimaisPerdidosNovo = () => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 84;
	const totalResolvidos = 78;
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
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
								link: "/adocao_animais",
							},
						]}
					/>
					<ContainerColumn>
						<h1> Animais Perdidos </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<Link to = "/animais_perdidos_lista" style = {{ textDecoration: "none" }}>
						<ServiceDescription description = "Utilize este serviço para cadastrar um novo animal perdido na lista. Para checar a lista completa, clique AQUI." />
					</Link>
					<FormContainer>
						<Input
							title = "Última vez que o seu animal foi visto:"
							placeholder = "data e hora, se possível lembrar."
						/>
						<Input
							title = "O último local em que seu animal foi visto:"
							placeholder = "pontos de referência, endereço, o que for possível..."
						/>
						<p> OU </p>
						<InputLocalization style = {{ marginBottom: "4vh" }}> Usar Localização Atual </InputLocalization>
						<DescriptionInput
							title = "Descrição do animal:"
							placeholder = "conte-nos em detalhes a raça, aparência, nome e tudo o que puder facilitar a identificação do seu animal."
						/>
						<InputPhotos />
						<Button text = "Enviar" />
					</FormContainer>
				</Square>
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
		</>
	);
};
export default AnimaisPerdidosNovo;
