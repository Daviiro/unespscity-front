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
import GrayLine from "../../../components/StyledComponents/gray-line";
import Button from "../../../components/StyledComponents/form-button";
import Footer from "../../../components/footer";

const Escorpiao = () => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 44;
	const totalResolvidos = 19;
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_controle_pragas.png"
						titulo="Controle de Pragas"
					/>
					<ContainerColumn>
						<h1> Foco de Escorpião </h1>
						<Line />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Utilize este serviço para informar a localização de focos de escorpiões e demais aracnídeos que fornecem perigo à população." />
					<Details>
						<InputAddressContainer>
							<Input title="Endereço:" width="36vw" />
							<Input title="Nº" width="7vw" />
						</InputAddressContainer>
						<Input
							title="Ponto de Referência:"
							placeholder="Opcional"
						/>
						<DescriptionInput placeholder="Conte-nos em detalhes sobre o problema encontrado." />
						<Button text="Enviar" />
					</Details>
				</Square>
				<GrayLine />
				<ChartContainer>
					<h3> Eliminações solicitadas e efetuadas: </h3>
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
export default Escorpiao;
