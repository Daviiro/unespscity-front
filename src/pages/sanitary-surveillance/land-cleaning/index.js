import React from "react";
import {
	ContainerBase,
	SubHeader,
	ContainerColumn,
	InputAddressContainer,
	Square,
	Details,
	ChartContainer,
} from "./styles";
import HomePieChart from "../../../charts/donut";
import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import { StyledHr } from "../../../components/styled-components/StyledHr";
import ServiceDescription from "../../../components/service-description";
import Input from "../../../components/input";
import DescriptionInput from "../../../components/description-input";
import Button from "../../../components/styled-components/form-button";
import GrayLine from "../../../components/styled-components/gray-line";
import footer from "../../../components/footer";
import InputPhotos from "../../../components/images-input";
import InputLocalization from "../../../components/user-location-input";

const Terreno = () => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 37;
	const totalResolvidos = 17;
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_vigilancia_sanitaria.png"
						titulo="Vigilância Sanitária"
					/>
					<ContainerColumn>
						<h1> Limpeza de Terreno </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Utilize este serviço para solicitar a limpeza de terrenos públicos pertencentes ao município ou para denunciar terrenos baldios particulares com irregularidades." />
					<Details>
						<InputLocalization />
						<p>OU</p>
						<InputAddressContainer>
							<Input title="Endereço:" width="36vw" />
							<Input title="Nº" width="7vw" />
						</InputAddressContainer>
						<Input
							title="Ponto de Referência:"
							placeholder="Opcional"
						/>
						<DescriptionInput
							title="Descrição:"
							placeholder="Conte-nos em detalhes sobre o problema encontrado."
						/>
						<InputPhotos />
						<Button text="Enviar" />
					</Details>
				</Square>
				<GrayLine />
				<ChartContainer>
					<h3> Limpezas solicitadas e efetuadas: </h3>
					<HomePieChart
						solved={totalResolvidos}
						unsolved={totalSolicitados}
					/>
				</ChartContainer>
				<footer />
			</ContainerBase>
		</>
	);
};
export default Terreno;
