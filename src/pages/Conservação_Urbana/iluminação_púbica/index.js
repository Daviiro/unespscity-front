import React from "react";
import HomePieChart from "../../../charts/donut";

import {
	ContainerBase,
	SubHeader,
	ContainerColumn,
	InputAddressContainer,
	Square,
	Details,
	ChartContainer,
} from "./styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/MiniCard";
import Line from "../../../components/StyledComponents/line";
import ServiceDescription from "../../../components/ServiceDescription";
import Input from "../../../components/input";
import DescriptionInput from "../../../components/DescriptionInput";
import Button from "../../../components/StyledComponents/form-button";
import GrayLine from "../../../components/StyledComponents/gray-line";
import Footer from "../../../components/footer";
import InputPhotos from "../../../components/ImagesInput";
import InputLocalization from "../../../components/UserLocationInput";

const Iluminacao = () => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 81;
	const totalResolvidos = 9;
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_conservacao_urbana.png"
						titulo="Conservação Urbana"
					/>
					<ContainerColumn>
						<h1> Iluminação Pública </h1>
						<Line />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Utilize este serviço para informar ocorrências com a iluminação de áreas públicas da cidade, como postes e outras fontes de luz queimadas, danificadas, oscilando e/ou irregulares." />
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
					<h3> Serviços solicitados e resolvidos: </h3>
					<HomePieChart
						solved={totalResolvidos}
						unsolved={totalSolicitados}
					/>
				</ChartContainer>
				<Footer />
			</ContainerBase>
		</>
	);
};
export default Iluminacao;
