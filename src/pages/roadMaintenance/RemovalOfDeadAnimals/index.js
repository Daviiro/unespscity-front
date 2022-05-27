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

import Header from "../../../components/header";
import MiniCard from "../../../components/MiniCard";
import Line from "../../../components/StyledComponents/line";
import ServiceDescription from "../../../components/ServiceDescription";
import Input from "../../../components/input";
import DescriptionInput from "../../../components/DescriptionInput";
import Button from "../../../components/StyledComponents/form-button";
import GrayLine from "../../../components/StyledComponents/gray-line";
import Footer from "../../../components/footer";
import InputLocalization from "../../../components/UserLocationInput";
import InputPhotos from "../../../components/ImagesInput";
import HomePieChart from "../../../charts/donut";

const Animais_Mortos = () => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 91;
	const totalResolvidos = 45;
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_remocao_detritos.png"
						titulo="Remoção de Detritos"
					/>
					<ContainerColumn>
						<h1> Animais Mortos </h1>
						<Line />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Utilize este serviço para solicitar a remoção de corpos de animais mortos localizados dentro dos limites do município." />
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
					<h3> Remoções solicitadas e efetuadas: </h3>
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
export default Animais_Mortos;
