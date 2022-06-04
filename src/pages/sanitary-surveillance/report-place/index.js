import React from "react";
import PagesPieChart from "../../../charts/types/donut";

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
import Form from "../../../components/forms";

const Restaurante = () => {
	// posteriormente passar o número de solicitados e de resolvidos por parâmetro //
	const totalSolicitados = 25;
	const totalResolvidos = 9;
	return (
		<>
			<ContainerBase>
				<Header />
				<SubHeader>
					<MiniCard
						source="/assets/img/home_vigilancia_sanitaria.png"
						titulo="Vigilância Sanitária"
						linkItems={[
							{
								id: 1,
								name: "Limpeza de Piscinas",
								link: "/limpeza_de_piscinas",
							},
							{
								id: 2,
								name: "Limpeza de Terreno",
								link: "/limpeza_de_terreno",
							},
							{
								id: 3,
								name: "Restaurantes/Ambientes Irregulares",
								link: "/restaurantes",
							},
						]}
					/>
					<ContainerColumn>
						<h1> Restaurantes / Ambientes Irregularess </h1>
						<StyledHr />
					</ContainerColumn>
				</SubHeader>
				<Square>
					<ServiceDescription description="Utilize este serviço para solicitar a vistoria em restaurantes e outros estabelecimentos que estejam descumprindo as normas da vigilância sanitária." />
					<Form />
				</Square>
				<GrayLine />
				<ChartContainer>
					<h3> Vistorias solicitadas e processadas/realizadas: </h3>
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
export default Restaurante;
