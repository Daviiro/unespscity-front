import React from "react";
import {
	ContainerBase,
	SubHeader,
	ContainerColumn,
	Square,
	ChartContainer,
} from "./styles";

import Header from "../../../components/header";
import MiniCard from "../../../components/mini-card";
import { StyledHr } from "../../../components/styled-components/StyledHr";
import ServiceDescription from "../../../components/service-description";
import GrayLine from "../../../components/styled-components/gray-line";
import Footer from "../../../components/footer";
import HomePieChart from "../../../charts/donut";
import Form from "../../../components/form";

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
						linkItems={[
							{
								id: 1,
								name: "Animais Mortos",
								link: "/animais_mortos",
							},
						]}
					/>
					<ContainerColumn>
						<h1> Animais Mortos </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Utilize este serviço para solicitar a remoção de corpos de animais mortos localizados dentro dos limites do município." />
					<Form/>
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
